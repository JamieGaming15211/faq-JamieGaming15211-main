# FAQ

## Description

Create a basic FAQ (Frequently Asked Questions) with at least four question-answer pairs. Use JavaScript to toggle the visibility of each answer and change button icons accordingly.

## Procedures

### Prep

1. Choose a topic for your FAQ. It can be anything that interests you: a social issue, game, product, hobby, etc.
2. Write four questions and corresponding answers on the topic.
3. Find one high-quality photo that represents your topic from [Unsplash](https://unsplash.com), another stock photo site, or your own image library. Use [Squoosh](https://squoosh.app) or your preferred photo editing application to resize and compress the image according to the IMS322 Docs [Style Guide](https://ersheff.github.io/IMS322-Docs/style-guide/#image-compression-resolution-and-organization) and [Optimizing Images](https://ersheff.github.io/IMS322-Docs/ref/optimizing-images/) guidelines. Copy the prepared image to the `images` folder in your project.

### Content

1. Structure the necessary HTML elements to hold the following content:
   1. Questions should be placed in `<button>` elements, even if they will not be styled to look like buttons.
   2. Each question button should include an icon of your choosing (e.g. up/down arrows or plus/minus signs) that will change depending on whether the answer is visible or hidden.
   3. Answers should be placed under each question. CSS and JavaScript will be added later to show and hide them.
   4. Include the image chosen during the prep stage. This can be placed above, below, or beside the questions and answers.
2. Add a documentation section at the bottom of the page. This should be based on your Documentation Template submission, though you are welcome to make modifications. Include the following content, replacing any preexisting images and text in the template:
   1. Both FAQ sketch images, with captions.
   2. The unannotated FAQ wireframe image, with a caption.
   3. A placeholder for the descriptive paragraph, which will be written later.

### Styling

1. Develop a cohesive layout and aesthetic design that reflects your topic.
   1. Use two non-grayscale colors (these should be carried over from your wireframe with HEX or RGB values).
   2. Apply one non-default font (follow [Font Selection and Loading](https://ersheff.github.io/IMS322-Docs/style-guide/#font-selection-and-loading) guidelines from the IMS322 Style Guide).
2. Apply a `transition` time to the question buttons and define a `:hover` state that contrasts with their default style.
3. Apply a `transition` time and `overflow: hidden` to the answer elements. The latter will ensure that text does not "spill out" of the answer container when it is closed. Adjust the `transition` duration if desired once the buttons are functional.
4. Define a closed class for the answers. Use properties compatible with `transition` times (i.e., avoid `display: none`). Manually apply the closed class to answer elements to preview the results as needed.
   1. The suggested method for opening and closing answers is to define `max-height: Xrem` as the default (replacing `X` with a value sufficient to accommodate all text) and `max-height: 0rem` for the closed class.
5. Define a closed class for the question buttons and their icons. This class may be used to change `transform`, `color`, `background-image`, or any other suitable property that achieves the desired effect. Manually apply the closed class to buttons elements to preview the results as needed. Adjust the `transition` duration if desired once the buttons are functional.

### Interactivity and Dynamic Behavior

Use variables, event listeners, functions, and the `classList.toggle()` method to manage answer and button behavior.

1. Use variables to reference HTML elements.
2. Define functions that include the `classList.toggle()` method to add and remove the closed class on answers and buttons.
3. Add event listeners to the buttons to call the functions when clicked.
4. Recommended: Start by ensuring that the first button and question-and-answer pair work as expected, then replicate that code for the remaining items, updating variables and functions as needed.

### Finishing Up

1. Manually apply the closed class to all answers and buttons so they start in a closed state when the page initially loads.
2. Write a 2-5 sentence description that explains your topic and important design considerations. Your writing should be professional and concise, appropriate for a portfolio submission. Consider addressing the following questions (you do not need to answer them all):
   1. Why is this topic important to you?
   2. Who might benefit from learning more about this topic? Or, who would be a good audience for this site?
   3. What were some unexpected challenges that you encountered, and how did you overcome them?
   4. What changes did you make from sketch to final product, and why?

## Submission

_These steps apply to both the draft (draft branch) and final (main branch) stages. It is recommended that you Stage and Commit after each major change (steps 1-3) and Sync often (step 4), even before you are finished._

1. Open the **Source Control** panel in VS Code.
2. Stage all changes by clicking the **+** next to **Changes**.
3. Enter a commit message and click the **Commit** button (use "finished" for your final commit).
4. The **Commit** button should change to a **Sync Changes** button. Click this to finish syncing the latest changes to your online GitHub repository.
5. Find your repository on GitHub.
6. Go to the **Settings** tab within the repository and navigate to the **Pages** section.
7. Under **Branch**, choose the appropriate branch (draft or main) and click **Save**.
8. After a few moments, if you refresh the page, there should now be a URL near the top next to a **Visit Site** button. If you click this button, you should see your site open in a new window.
9. Copy the URL generated by GitHub Pages, paste it in the Website URL field of the corresponding Canvas assignment, and click **Submit Assignment**.

## Grading

**36 points total**

Refer to the rubric on Canvas for detailed grading criteria.

Points will _not_ be awarded for any portions of the submission that do not comply with the Artificial Intelligence and Grading Policies outlined in the syllabus:

- If using GitHub Copilot, export the session as a .json file by opening the **Command Palette** in VS Code and running "Chat: Export Session…" Save this file in your project folder before submission.
- Any code submitted using statements or structures not covered by class documentation, examples, or demonstrations must include a link to the source as comments in the code. You are expected to use class techniques when generating code using GitHub Copilot.
