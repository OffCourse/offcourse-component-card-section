require './helpers'
describe "Card Section Component", ->

  beforeAll ->
    moduleUnderTest = "../src/index.jsx"
    mockModules = []
    { @Component, @spy } = mockModule moduleUnderTest, mockModules

  afterAll -> disableMocks()

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
    Then  -> @subject.querySelectorAll("h1").length == 1
    Then  -> @subject.querySelector("h1").textContent == "Bla"

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
    Then  -> @subject.querySelectorAll("h1").length == 0
    Then  -> @subject.querySelectorAll("p").length == 2

  describe "when other", -> 
    Given -> 
      testdom "<html><body></body></html>"
      @type = "description"
      @data = "Qux"
      @section = { @type, @data }
    When  -> @subject  = renderElement @Component, @section
    Then  -> @subject.querySelector("h1").textContent == "Description"
    Then  -> @subject.querySelectorAll("p").length == 1
