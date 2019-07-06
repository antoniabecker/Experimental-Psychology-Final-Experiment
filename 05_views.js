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
            The experiment will take about 15 minutes to complete. Please concentrate on the task and make sure that you will not be distracted.
            <br />
            <br />
            Before the actual experiment we ask you to complete a short vision test.
            <br />
            <br />
            Click on the button below to start with the test.`,
    buttonText: 'start test'
});


// For most tasks, you need instructions views
// instructions for first part of the experiment
const instructions_1 = babeViews.view_generator('instructions', {
    trials: 1,
    name: 'instructions_1',
    title: 'Instructions',
    text:  `Thank you.
            <br />
            <br />
            This experiment is divided into two experimental blocks.
            <br />
            <br />
            During this first part, you will be shown pictures of artworks.
            For each picture, you are asked to rate how much you like the picture on a scale from 1 to 7.
            <br />
            <br />
            If you <strong>like</strong> the picture, please choose a <strong>higher number</strong>. If you <strong>dislike</strong> the picture, please indicate this by choosing a <strong>lower number</strong>.`,
    buttonText: 'start experiment'
});

// For most tasks, you need instructions views
// instructions for the second part of the experiment
const instructions_2 = babeViews.view_generator('instructions', {
    trials: 1,
    name: 'instructions_2',
    title: 'Instructions',
    text:  `Great! Now the first part is over.
            <br />
            <br />
            For the second part, you will again be shown pictures of artworks.
            This time, please rate how well you can <strong>detect objects</strong> within the picture on a scale from 1 to 7.
            This can e.g. be detecting faces, objects, gestalt forms etc.
            <br />
            <br />
            If you feel like you can <strong>detect objects well</strong>, please choose a <strong>higher number</strong>. If not, please indicate this by choosing a <strong>lower number<strong>.`,
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


// Here, we initialize a rating scale view
// this is for the 'like' condition
const ratingScaleLike = babeViews.view_generator('rating_scale', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    // HERE: delete the "2, //" after testing: this is only for not having to rate all pictures in test phase
    trials: trial_info.ratingScaleLike.length,
    // name and trial_type should be identical to the variable name
    name: 'ratingScaleLike',
    trial_type: 'ratingScaleLike',
    data: _.shuffle(trial_info.ratingScaleLike),

});

// Here, we initialize a rating scale view
// this is for the 'detect' condition
const ratingScaleDetect = babeViews.view_generator('rating_scale', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    // HERE: delete the "2, //" after testing: this is only for not having to rate all pictures in test phase
    trials: trial_info.ratingScaleDetect.length,
    // name and trial_type should be identical to the variable name
    name: 'ratingScaleDetect',
    trial_type: 'ratingScaleDetect',
    data: _.shuffle(trial_info.ratingScaleDetect),

});

// Here, we initialize a textbox input view
// this is for the preceding colour vision test
const colourVisionTestSession1 = babeViews.view_generator('textbox_input', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: 1,
    // name and trial_type should be identical to the variable name
    name: 'colourVisionTest1',
    trial_type: 'colourVisionTest1',
    data: trial_info.colourVisionTest1,

});

// Here, we initialize a textbox input view
// this is for the preceding colour vision test
const colourVisionTestSession2 = babeViews.view_generator('textbox_input', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: 1,
    // name and trial_type should be identical to the variable name
    name: 'colourVisionTest2',
    trial_type: 'colourVisionTest2',
    data: trial_info.colourVisionTest2,

});

// Here, we initialize a textbox input view
// this is for the preceding vision test
const visionTestSession = babeViews.view_generator('textbox_input', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: 1,
    // name and trial_type should be identical to the variable name
    name: 'visionTest',
    trial_type: 'visionTest',
    data: trial_info.visionTest,

});

// Here we initialize a rating scale view again
// this is for asking the participants if they would consider themselves an expert in cubist artwork
const askForExpertise = babeViews.view_generator('rating_scale', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: 1,
    // name and trial_type should be identical to the variable name
    name: 'expertise',
    trial_type: 'expertise',
    data: trial_info.expertise,

});

// Here we initialize a forced_choice view
// this is for asking the participants if they take the XPLab class
const askXplab = babeViews.view_generator('forced_choice', {
    trials: 1,
    name: 'xplab',
    trial_type: 'xplab',
    data: trial_info.xplab,

});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
