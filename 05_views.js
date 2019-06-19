// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator('intro', {
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Thank you for participating in our experiment!
            <br />
            <br />
            The experiment will take about 20 minutes to complete. Please concentrate on the task and make sure that you will not be distracted.
            <br />
            <br />
            Click on the button below to receive instructions.`,
    buttonText: 'Receive instructions'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator('instructions', {
    trials: 1,
    name: 'instructions',
    title: 'General Instructions',
    text:  `Please be concentrated while completing the task.
            <br />
            <br />
            You will be shown pictures.
            <br />
            <br />
            Your first task is, to rate how much you like the picture. For this, you'll be shown buttons <strong>from 1 to 7</strong>.
            <br />
            <br />
            If you <strong>like</strong> the picture, please choose a <strong>higher number</strong>. If you <strong>dislike</strong> the picture, please indicate this by choosing a <strong>lower number</strong>.
            <br />
            <br />
            In the second round you'll be shown the images again. 
            <br />
            <br />
            This time, please indicate how much you much you can detect in the picture. This can e.g. be detecting faces, objects, forms etc.
            <br />
            <br />
            You will be shown buttons <strong>from 1 to 7</strong> again. 
            <br />
            Please indicate a <strong>high detectability</strong> with a <strong>higher number</strong> and a <strong>low detecability</strong> with a <strong>lower number</strong>.
            <br />
            <br />
            Now start with a short practice session.`,
    buttonText: 'go to practice'
});

// For most tasks, you need instructions views
const final_instructions_1 = babeViews.view_generator('instructions', {
    trials: 1,
    name: 'final_instructions_1',
    title: 'Final Instructions',
    text:  `Now the practive trials are finished. Next start the "real" experiment!
            Please be concentrated while completing the task.
            <br />
            <br />
            You will have to rate how much you like a picture that is shown to you.
            <br />
            <br />
            <strong>Remember:</strong> 
            <br />
            If you <strong>like</strong> the picture, choose a <strong>higher number</strong>. If you <strong>dislike</strong> the picture, please indicate this by a <strong>lower number<strong>.`,
    buttonText: 'go to trials'
});

// For most tasks, you need instructions views
const final_instructions_2 = babeViews.view_generator('instructions', {
    trials: 1,
    name: 'final_instructions_2',
    title: 'Final Instructions',
    text:  `Now the first task is over. Next start the second task!
            Please be concentrated while completing the task.
            <br />
            <br />
            You will now have to rate how much you you can detect in a picture that is shown to you.
            <br />
            <br />
            <strong>Remember:</strong> 
            <br />
            If you feel like the picture has a <strong>high detectability</strong>, choose a <strong>higher number</strong>. If you think the picture has a <strong>low detectability</strong>, please indicate this by a <strong>lower number<strong>.`,
    buttonText: 'go to trials'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks', {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a keyPress view
const rating_scale_like = babeViews.view_generator('rating_scale', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_like.length,
    // name and trial_type should be identical to the variable name
    name: 'rating_scale_like',
    trial_type: 'rating_scale_like',
    data: _.shuffle(trial_info.rating_scale_like),
   // pause: 500,

});

// Here, we initialize a keyPress view
const rating_scale_detect = babeViews.view_generator('rating_scale', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_detect.length,
    // name and trial_type should be identical to the variable name
    name: 'rating_scale_detect',
    trial_type: 'rating_scale_detect',
    data: _.shuffle(trial_info.rating_scale_detect),
   // pause: 500,

});


const practice_session = babeViews.view_generator('rating_scale', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.rating_scale_practice.length,
    // name and trial_type should be identical to the variable name
    name: 'rating_scale_practice',
    trial_type: 'rating_scale_practice',
    data: _.shuffle(trial_info.rating_scale_practice),
   // pause: 500,

});

const colour_vision_test_session = babeViews.view_generator('textbox_input', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.colour_vision_test.length,
    // name and trial_type should be identical to the variable name
    name: 'colour_vision_test',
    trial_type: 'colour_vision_test',
    data: trial_info.colour_vision_test,
  //  pause: 500,

});

const vision_test_session = babeViews.view_generator('textbox_input', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.vision_test.length,
    // name and trial_type should be identical to the variable name
    name: 'vision_test',
    trial_type: 'vision_test',
    data: trial_info.vision_test,
  //  pause: 500,

});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
