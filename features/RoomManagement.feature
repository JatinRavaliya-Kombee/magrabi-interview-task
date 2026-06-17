Feature: Room Management

  Background: User logs into the application
    Given user opens the Magrabi login page
    And user enters email and submits
    And user enters OTP "123456" and clicks login

  @Scenario1
  Scenario: Navigate to Room Management page
    When user expands the sidebar and clicks Room Management
    Then Room Management page should be displayed
    When user navigates to Room Management and clicks New Room
    And user enters room name "Interview Room" and description "Test room for interview"
    Then user clicks Create button and room is created

  # @Scenario2
  # Scenario: Create a new room
  #   When user navigates to Room Management and clicks New Room
  #   And user enters room name "Interview Room" and description "Test room for interview"
  #   Then user clicks Create button and room is created
