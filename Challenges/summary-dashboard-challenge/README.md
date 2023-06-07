# Results Summary Dashboard 
## Frontend static website challenge

**Challenge**: https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV 

**Description of Challenge**: Build a results dashboard for a test that measures reaction, memory, verbal, and visual skills of an individual. The dashboard looks like a card, where on the left side there is a total score metric with some feedback on how the individual stands against other test takers. On the right side, against a white background, there are individual breakdowns for how the person did on each of the skills tested, with a continue button at the bottom to presumably go to a following page. 
Focus on Web Desktop Version (Ignored Mobile Development Version for this challenge)

**Expected Desktop Design to Replicate**

<img
  src="./src/assets/design/desktop-design.jpg "
  alt="Expected Desktop Design with a card at the center. On the left side, it displays 76 / 100 as the total score, captioned as 'Great', and a report that the user did better than 65% of other participants. On the right side, there are individual breakdowns of the score: reaction (80/100), memory (92/100), verbal(61/100), visual(72/100). At the bottom there is a Continue Button"
  title="Desktop Design"
  style="display: inline-block; margin: 0 auto; max-width: 300px">

  You can visualize this image in the design folder, located in src -> assets -> design -> desktop-design.jpg.

  ## Goals for the Challenge
  * Get an easy challenge to start learning web dev using React. Started with a static website to avoid the complexities of dynamic web development
* Be mindful of accessibility guidelines and requirements

## End Result of the Development without Accessibility

<img
  src="./src/assets/images/end-result-inaccessible.png "
  alt="Almost near rendering of the expected desktop-preview. Missing bordered corners, and left-side of the card is slightly more narrow."
  title="Shristi's Implementation"
  style="display: inline-block; margin: 0 auto; max-width: 300px">

You can visualize this image in the assets folder, located in src -> assets -> end-result-inaccessible.png.

To open a live example, please run on the commit prior to the accessibility changes.

## Key differences between the expected and actual rendering of the static website

* Height of my implementation appears to be larger than expected, making the left-side more narrow

* Missing colored border corners for the individual results breakdown

* Spacing among components is a little off

## Accessibility Implementation

Used Firefox Accessibility Inspector to check against standard WAI-ARIA and WCAG metrics. Next step would be screen readers and other accessibility benchmarks. 

Highlight is that the design of this challenge uses opaque and more dull text / color contrast making the bulk of the accessibility issues.

Below is a screenshot of the accessibility issues that were highlighted upon the initial implementation. 

<img
  src="./src/assets/images/Accessibility Issues.png "
  alt="11 issues are highlighted, most of them related to color contrast"
  title="Accessibility Issues"
  style="display: inline-block; margin: 0 auto; max-width: 300px">

Re-rendering of the website integrating  accessibility standards

<img
  src="./src/assets/images/accessible implementation.png "
  alt="Same card with higher contrast on the paragraph text, color, and individual results breakdown"
  title="Accessibility Issues"
  style="display: inline-block; margin: 0 auto; max-width: 300px">

This rendering passed all except the keyboard error on Firefox Mozilla Accessibility Standard

**Note**: div object is clickable and thus invokes a keyboard error in regard to focus and clickability. Struggled in resolving this issue.

It wasn't hard to implement or make the changes! Has very good documentation to reference the errors, how to fix it, and what causes it. As well as why that standard / metric is important

## Things to Avoid for Next Time
* Avoid inline CSS styling as much as possible - to make styling scalable and easily maintainable. mostly used for custom text styling and rendering custom parts of the specific results components (right) side.
* Tabulate the numbers of the result from the provided json file - adding a more dynamic component
* Only create new nested div elements or other nested HTML tags when the parent element is unable to handle the complexities of the child element (be able to better handle css styling)
* Make components handle less information being passed in, or start creating objects
* Have elements refer to multiple CSS classes (learned about this towards the end)

## Running the Application
Since this react application uses Vite, use

` npm run dev` 

** assumes npm, react, and vite installation

