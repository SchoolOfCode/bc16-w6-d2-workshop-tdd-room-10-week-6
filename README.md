# Test driven development (TDD)

Test driven development means writing tests first, before writing code. The tests define what the code should do. Then you write code to pass the tests. Writing tests first helps you think through what the code needs to do. It also helps make sure the code stays organised and easy to change later. We'll use Vitest to write and run tests easily.

## 💡 OBJECTIVES FOR THE WORKSHOP

This workshop is all about TDD! Here's a glimpse of what you'll be achieving by the end of this workshop:

- Object 1: Write software using a TDD approach
- Object 2: Applying the TDD cycle (red -> green -> refactor)
- Object 3: Having a disciplined focus on writing the simplest, minimal working implementation to pass a failing test

## 🎟️ TICKETS

Your manager has tasked you with creating a `calculateScrabbleScore` function that takes in a word and returns a correctly calculated scrabble score for that word.

- Your tests will go in `scrabble-score.test.js`.
- Your implementation will go in `scrabble-score.js`. If you look there, a basic skeleton for the function has already been created and exported for you.

The scores for each letter are as follows:

| Letter | Score |
| ------ | ----- |
| A      | 1     |
| B      | 3     |
| C      | 3     |
| D      | 2     |
| E      | 1     |
| F      | 4     |
| G      | 2     |
| H      | 4     |
| I      | 1     |
| J      | 8     |
| K      | 5     |
| L      | 1     |
| M      | 3     |
| N      | 1     |
| O      | 1     |
| P      | 3     |
| Q      | 10    |
| R      | 1     |
| S      | 1     |
| T      | 1     |
| U      | 1     |
| V      | 4     |
| W      | 4     |
| X      | 8     |
| Y      | 4     |
| Z      | 10    |

To give a couple of examples of how this table works:

- The word `I` would be worth 1 point (`I -> 1`)
- The word `ICED` would be worth 7 points (`I C E D -> 1 + 3 + 1 + 2`)

We'll keep extending the functionality in small increments.

**Remember the discipline:** Write the simplest and minimal test for a failing test case. Then write the simplest and minimal code/implementation to pass the failing test. Don't read ahead, don't try to predict what the code might need later.

Time to dive into action! 🏊‍♂️ Here's what you'll be working on:

### 🎫 Ticket 1 - Setup

Install Vitest as a dev dependency. If you need a refresher, search online for how to install Vitest and how to have it run your tests.

### 🎫 Ticket 2 - Single letters

1. Write a new test that checks whether `calculateScrabbleScore` correctly calculates the score for the word `A`.
   - Once you've written the test, run the tests with Vitest.
   - The test you wrote should fail at first. This is because you wrote the test before writing the code to make it pass.
   - This is the "red" stage in the TDD cycle (red -> green -> refactor)
2. Now add the simplest code you can to the `calculateScrabbleScore` function. Make it return the right score for the word "A" to pass the failing test.
   - Once you've updated the implementation, run the tests again.
   - This time the test should pass (if your implementation is correct).
   - This is the "green" stage in the TDD cycle (red -> green -> refactor)
3. Look over the code. Make changes to simplify or improve it if you can. When you're done with changes, run the tests again. This checks that your changes didn't break anything.
   - This is the "refactor" stage in the TDD cycle (red -> green -> refactor)
4. Now repeat steps 1-3 for the remaining single letter words (i.e. `B`, `C`, `D` and so forth up to and including `Z`).
   - **Optional:** Writing all these tests might feel repetitive. You could try using Vitest's `test.each` method ([docs](https://vitest.dev/api/#test-each)) to avoid repeating code. Look at the `.each` examples to see how it works. Try using it in your tests. If you spend too much time on `.each`, just write the tests without it, even if you repeat code.

**Remember the discipline of writing the simplest code to meet the current requirements.** Your implementation should only handle single letter words by the end of this ticket.

### 🎫 Ticket 3 - Multiple letters

1. Write a new failing test for a word with more than one letter. Pick the word and figure out its score.
2. Update the code so the new test passes.
3. Look over the code. Refactor/simplify if needed and then re-run the tests to make sure the tests still pass after any changes.
4. Repeat steps 1-3 for more words with multiple letters. Pick whatever words you want.

### 🎫 Ticket 4 - Input validation

1. Write a new test to ensure the function throws an error if any of the characters in the word given are outside of A-Z. You can use `.toThrowError` ([Vitest docs](https://vitest.dev/api/expect.html#tothrowerror)) to catch and check the error. The test should currently fail.

2. Update the implementation to make the failing test pass. You can use the `throw` statement in JS to deliberately throw/cause an error: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw#description

3. Refactor where/if needed and then re-run the tests to make sure they still pass after your changes.

### 🎫 Ticket 5 - Bonus score

A new requirement has come in.

> If a player uses all seven tiles, they should score a bonus of 50 points on top of the word score.

Go through the TDD process (write a failing test -> update the implementation so that the test passes -> refactor where/if needed) to support/meet this requirement.

### 🎫 Ticket 6 - Case insensitivity

A new requirement has come in.

> The function should support both uppercase and lowercase letters, and score correctly. The lowercase letters have the same values as their uppercase equivalents.

Go through the TDD process (write a failing test -> update the implementation so that the test passes -> refactor where/if needed) to support/meet this requirement.
