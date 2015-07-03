require './helpers'
describe "Card Section Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = [
      "offcourse-component-card-field"
    ]
    { @Component, @spy } = mockModule moduleUnderTest, mockModules

  afterAll ->
    disableMocks()

  Given -> 
    testdom "<html><body></body></html>"
    @title = "Bla"
    @fields = [
      ["Foo", "Bar"],
      ["Bar", "Baz"]
    ]
  When  -> @subject  = renderElement @Component, { @title, @fields }
  Then  -> @classes = @subject.className.split ' '
  And   -> @classes.includes "card_section"
  And   -> @classes.includes "card_section-bla"
  And   ->
      args = { title: @fields[0][0], field: @fields[0][1] }
      expect(@spy.getCall(0).args[0]).to.deep.equal(args)
  And   ->
      args = { title: @fields[1][0], field: @fields[1][1] }
      expect(@spy.getCall(1).args[0]).to.deep.equal(args)
