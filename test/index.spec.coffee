require './helpers'
describe "Card Section Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = []
    { @Component, @spy } = mockModule moduleUnderTest, mockModules

  afterAll -> disableMocks()

  describe "custom components", ->
    describe "when title", -> 
      Given -> 
        testdom "<html><body></body></html>"
        @type = "title"
        @data = "Bla"
        @section = { @type, @data }
      When  -> @subject  = renderElement @Component, @section
      Then  -> @classes = @subject.className.split ' '
      And   -> @classes.includes "card_section"
      And   -> @classes.includes "card_section-title"
      And   -> @subject.querySelectorAll("h1").length == 1
      And   -> @subject.querySelector("h1").textContent == "Bla"

    describe "when meta", -> 
      Given -> 
        testdom "<html><body></body></html>"
        @type = "meta"
        @data = [
            title: "curator",
            value: "FooBar"
        ,
            title: "followers",
            value: "BarBaz"
        ]
        @section = { @type, @data }
      When  -> @subject  = renderElement @Component, @section
      Then  -> @classes = @subject.className.split ' '
      And   -> @classes.includes "card_section"
      And   -> @classes.includes "card_section-meta"
      And  -> @subject.querySelectorAll("h1").length == 0
      And  -> @subject.querySelectorAll("p").length == 2

    describe "when collection", -> 
      Given -> 
        testdom "<html><body></body></html>"
        @type = "list"
        @data = 
            type: "foo"
            collection: ["bar", "baz", "bax"]
        @section = { @type, @data }
      When  -> @subject  = renderElement @Component, @section
      Then  -> @classes = @subject.className.split ' '
      And   -> @classes.includes "card_section"
      And   -> @classes.includes "card_section-list"
      And   -> @subject.querySelectorAll("h1").length == 1
      And   -> @subject.querySelectorAll("ul").length == 1
      And   -> @subject.querySelectorAll("li").length == 3

    describe "when other", -> 
      Given -> 
        testdom "<html><body></body></html>"
        @type = "description"
        @data = "Qux"
        @section = { @type, @data }
      When  -> @subject  = renderElement @Component, @section
      Then  -> @subject.querySelector("h1").textContent == "Description"
      And  -> @subject.querySelectorAll("p").length == 1

  describe "custom components", ->

    describe "when no handlers", ->
      Given -> 
        @spy.reset()
        testdom "<html><body></body></html>"
        @type = "title"
        @data = "Bla"
        @component = @spy 
        @section = { @type, @data, @component }
      When  -> @subject  = renderElement @Component, @section
      Then  ->
        args = { @data, handlers: undefined }
        expect(@spy.getCall(0).args[0]).to.deep.equal(args);

    describe "when handlers", ->
      Given -> 
        @spy.reset()
        testdom "<html><body></body></html>"
        @type = "title"
        @data = "Bla"
        @component = @spy 
        @handlers =
          foo: -> "bar"
        @section = { @type, @data, @handlers, @component }
      When  -> @subject  = renderElement @Component, @section
      Then  ->
        args = { @data, @handlers }
        expect(@spy.getCall(0).args[0]).to.deep.equal(args);
