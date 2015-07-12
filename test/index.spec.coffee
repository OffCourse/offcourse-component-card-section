require './helpers'
describe "Card Section Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = [
      "offcourse-component-card-field"
    ]
    { @Component, @spy } = mockModule moduleUnderTest, mockModules

  afterAll -> disableMocks()

  describe "when title is not important", -> 
    Given -> 
      testdom "<html><body></body></html>"
      @type = "Bla"
      @fields = [
        ["Foo", "Bar"],
        ["Bar", "Baz"]
      ]
      @section = { @type, @fields }
    When  -> @subject  = renderElement @Component, { @section }
    Then  -> @classes = @subject.className.split ' '
    And   -> @classes.includes "card_section"
    And   -> @classes.includes "card_section-bla"
    And   ->
        args = { type: @fields[0][0], field: @fields[0][1] }
        expect(@spy.getCall(0).args[0]).to.deep.equal(args)
    And   ->
        args = { type: @fields[1][0], field: @fields[1][1] }
        expect(@spy.getCall(1).args[0]).to.deep.equal(args)

  describe "when title is important", -> 
    Given -> 
      testdom "<html><body></body></html>"
      @type = "description"
      @fields = [
        ["Foo", "Bar"],
        ["Bar", "Baz"]
      ]
      @section = { @type, @fields }
    When  -> @subject  = renderElement @Component, { @section}
    Then  -> @subject.querySelector("h1").textContent = "Description"
