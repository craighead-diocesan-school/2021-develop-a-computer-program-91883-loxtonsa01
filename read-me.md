# User input
The User Imput component lets the user enter the customers name.

## Expected:
 * "Jess" -Passed
 * "Kelly" -Passed

## Boundary:
 * "G" -Passed
 * "^&*()_" -Failed

## Invalid:
 * " " -Failed

<br>
<br>

# Number Generator
The code make a secret number before alerting the given number.

## Expected:
 * Numbers "1" - "20"

## Tested:
1. "15" -Passed
1. "9" -Passed
1. "8" -Passed
1. "12" -Passed
1. "19" -Passed

<br>
<br>

 # User number input checker

 ## Expected:
  * Numbers "1" - "20"

 ## Boundary:
  * "1" -Passed
  * "20" -Passed

 ## Invalid:
  * "-1" -Failed
  * "the" -Passed
  * "21" -Failed