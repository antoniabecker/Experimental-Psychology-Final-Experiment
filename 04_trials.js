// In this file you can specify the trial data for your experiment


const trial_info = {
    // colour vision test with ishihara test plates
    colour_vision_test: [
        {
            question: "Which number do you see here?",
            picture: "images/ishihara.png",
            picture_number: 0,
            min_chars: 0,
            expected: 74
        },
        {
            question: "Which number do you see here?",
            picture: "images/ishihara2.jpg",
            picture_number: 0,
            min_chars: 0,
            expected: 7
        },
    ],
    // vision test with Snellen Chart
    vision_test: [
        {
            question: "Please make sure you are one arm-length away from your computer screen. Write the letters from line 7 into the box below.",
            picture: "images/Snellen_chart.jpg",
            picture_number: 0,
            min_chars: 1,
            expected: 'F E L O P Z D'
        },
    ],
    // ask about participant's expertise in cubist art
    expertise: [
        {
            question: "How much expertise do you have in cubism?",
            optionLeft: 'none',
            optionRight: 'a lot'
        },
    ],
    // ask if participant is attending xplab
    xplab: [
        {
            question: "Are you participating in the class 'Experimental Psychology Lab' ?",
            option1: 'Yes',
            option2: 'No'
        },
    ],
    // 120 pictures with artworks, participants rate whether they like it or not
    rating_scale_like: [
        {
            question: "How much do like this picture?",
            picture: "images/1.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 1,
            artist: 'Tommervik'
        },
        {
            question: "How much do like this picture?",
            picture: "images/2.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 2,
            artist: 'Tommervik'
        },
        {
            question: "How much do like this picture?",
            picture: "images/3.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 3,
            artist: 'Tommervik'
        },
        {
            question: "How much do like this picture?",
            picture: "images/4.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 4,
            artist: 'Tommervik'
        },
        {
            question: "How much do like this picture?",
            picture: "images/5.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 5,
            artist: 'Tommervik'
        },
        {
            question: "How much do like this picture?",
            picture: "images/6.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 6,
            artist: 'Tommervik'
        },
        {
            question: "How much do like this picture?",
            picture: "images/7.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 7,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/8.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 8,
            artist: 'Braque'
        },
        {
            question: "How much do like this picture?",
            picture: "images/9.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 9,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/10.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 10,
            artist: 'Braque'
        },
        {
            question: "How much do like this picture?",
            picture: "images/11.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 11,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/12.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 12,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/13.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 13,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/14.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 14,
            artist: 'Son'
        },
        {
            question: "How much do like this picture?",
            picture: "images/15.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 15,
            artist: 'DeYoung'
        },
        {
            question: "How much do like this picture?",
            picture: "images/16.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 16,
            artist: 'DeYoung'
        },
        {
            question: "How much do like this picture?",
            picture: "images/17.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 17,
            artist: 'DeYoung'
        },
        {
            question: "How much do like this picture?",
            picture: "images/18.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 18,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/19.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 19,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/20.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 20,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/21.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 21,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/22.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 22,
            artist: 'Braque'
        },
        {
            question: "How much do like this picture?",
            picture: "images/23.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 23,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/24.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 24,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/25.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 25,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/26.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 26,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/27.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 27,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/28.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 28,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/29.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 29,
            artist: 'Braque'
        },
        {
            question: "How much do like this picture?",
            picture: "images/30.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 30,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/31.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 31,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/32.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 32,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/33.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 33,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/34.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 34,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/35.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 35,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/36.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 36,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/37.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 37,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/38.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 38,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/39.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 39,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/40.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 40,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/41.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 41,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/42.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 42,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/43.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 43,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/44.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 44,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/45.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 45,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/46.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 46,
            artist: 'Gleizes'
        },
        {
            question: "How much do like this picture?",
            picture: "images/47.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 47,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/48.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 48,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/49.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 49,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/50.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 50,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/51.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 51,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/52.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 52,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/53.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 53,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/54.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 54,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/55.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 55,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/56.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 56,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/57.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 57,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/58.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 58,
            artist: 'Le Fauconnier'
        },
        {
            question: "How much do like this picture?",
            picture: "images/59.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 59,
            artist: 'Leger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/60.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 60,
            artist: 'Leger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/61.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 61,
            artist: 'Leger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/62.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 62,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/63.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 63,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/64.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 64,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/65.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 65,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/66.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 66,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/67.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 67,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/68.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 68,
            artist: 'Duchamp'
        },
        {
            question: "How much do like this picture?",
            picture: "images/69.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 69,
            artist: 'Duchamp'
        },
        {
            question: "How much do like this picture?",
            picture: "images/70.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 70,
            artist: 'Delaunay'
        },
        {
            question: "How much do like this picture?",
            picture: "images/71.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 71,
            artist: 'Delaunay'
        },
        {
            question: "How much do like this picture?",
            picture: "images/72.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 72,
            artist: 'Delaunay'
        },
        {
            question: "How much do like this picture?",
            picture: "images/73.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 73,
            artist: 'Braque'
        },
        {
            question: "How much do like this picture?",
            picture: "images/74.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 74,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/75.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 75,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/76.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 76,
            artist: 'de La Fresnaye'
        },
        {
            question: "How much do like this picture?",
            picture: "images/77.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 77,
            artist: 'Leger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/78.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 78,
            artist: 'Baranoff-Rossine'
        },
        {
            question: "How much do like this picture?",
            picture: "images/79.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 79,
            artist: 'Bruce'
        },
        {
            question: "How much do like this picture?",
            picture: "images/80.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 80,
            artist: 'Bruce'
        },
        {
            question: "How much do like this picture?",
            picture: "images/81.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 81,
            artist: 'Capek'
        },
        {
            question: "How much do like this picture?",
            picture: "images/82.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 82,
            artist: 'Delaunay'
        },
        {
            question: "How much do like this picture?",
            picture: "images/83.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 83,
            artist: 'Delaunay'
        },
        {
            question: "How much do like this picture?",
            picture: "images/84.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 84,
            artist: 'Gestel'
        },
        {
            question: "How much do like this picture?",
            picture: "images/85.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 85,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/86.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 86,
            artist: 'de La Fresnaye'
        },
        {
            question: "How much do like this picture?",
            picture: "images/87.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 87,
            artist: 'Le Fauconnier'
        },
        {
            question: "How much do like this picture?",
            picture: "images/88.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 88,
            artist: 'Marcoussis'
        },
        {
            question: "How much do like this picture?",
            picture: "images/89.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 89,
            artist: 'Marcoussis'
        },
        {
            question: "How much do like this picture?",
            picture: "images/90.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 90,
            artist: 'Marcoussis'
        },
        {
            question: "How much do like this picture?",
            picture: "images/91.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 91,
            artist: 'Marcoussis'
        },
        {
            question: "How much do like this picture?",
            picture: "images/92.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 92,
            artist: 'Popowa'
        },
        {
            question: "How much do like this picture?",
            picture: "images/93.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 93,
            artist: 'Popowa'
        },
        {
            question: "How much do like this picture?",
            picture: "images/94.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 94,
            artist: 'Popowa'
        },
        {
            question: "How much do like this picture?",
            picture: "images/95.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 95,
            artist: 'Popowa'
        },
        {
            question: "How much do like this picture?",
            picture: "images/96.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 96,
            artist: 'Popowa'
        },
        {
            question: "How much do like this picture?",
            picture: "images/97.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 97,
            artist: 'Popowa'
        },
        {
            question: "How much do like this picture?",
            picture: "images/98.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 98,
            artist: 'Popowa'
        },
        {
            question: "How much do like this picture?",
            picture: "images/99.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 99,
            artist: 'Ryback'
        },
        {
            question: "How much do like this picture?",
            picture: "images/100.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 100,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/101.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 101,
            artist: 'Bruce'
        },
        {
            question: "How much do like this picture?",
            picture: "images/102.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 102,
            artist: 'Bruce'
        },
        {
            question: "How much do like this picture?",
            picture: "images/103.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 103,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/104.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 104,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/105.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 105,
            artist: 'Metzinger'
        },
        {
            question: "How much do like this picture?",
            picture: "images/106.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 106,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/107.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 107,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/108.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 108,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/109.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 109,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/110.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 110,
            artist: 'Gris'
        },
        {
            question: "How much do like this picture?",
            picture: "images/111.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 111,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/112.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 112,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/113.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 113,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/114.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 114,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/115.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 115,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/116.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 116,
            artist: 'Tommervik'
        },
        {
            question: "How much do like this picture?",
            picture: "images/117.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 117,
            artist: 'Tommervik'
        },
        {
            question: "How much do like this picture?",
            picture: "images/118.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 118,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/119.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 119,
            artist: 'Picasso'
        },
        {
            question: "How much do like this picture?",
            picture: "images/120.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 120,
            artist: 'Picasso'
        },
    ],
    // same 120 pictures again, asking participants about how well they can detect objects within the picture
    rating_scale_detect: [
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/1.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 1,
            artist: 'Tommervik'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/2.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 2,
            artist: 'Tommervik'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/3.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 3,
            artist: 'Tommervik'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/4.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 4,
            artist: 'Tommervik'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/5.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 5,
            artist: 'Tommervik'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/6.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 6,
            artist: 'Tommervik'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/7.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 7,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/8.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 8,
            artist: 'Braque'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/9.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 9,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/10.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 10,
            artist: 'Braque'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/11.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 11,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/12.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 12,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/13.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 13,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/14.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 14,
            artist: 'Son'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/15.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 15,
            artist: 'DeYoung'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/16.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 16,
            artist: 'DeYoung'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/17.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 17,
            artist: 'DeYoung'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/18.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 18,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/19.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 19,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/20.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 20,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/21.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 21,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/22.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 22,
            artist: 'Braque'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/23.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 23,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/24.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 24,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/25.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 25,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/26.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 26,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/27.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 27,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/28.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 28,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/29.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 29,
            artist: 'Braque'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/30.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 30,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/31.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 31,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/32.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 32,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/33.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 33,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/34.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 34,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/35.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 35,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/36.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 36,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/37.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 37,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/38.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 38,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/39.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 39,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/40.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 40,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/41.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 41,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/42.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 42,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/43.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 43,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/44.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 44,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/45.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 45,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/46.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 46,
            artist: 'Gleizes'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/47.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 47,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/48.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 48,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/49.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 49,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/50.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 50,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/51.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 51,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/52.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 52,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/53.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 53,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/54.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 54,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/55.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 55,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/56.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 56,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/57.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 57,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/58.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 58,
            artist: 'Le Fauconnier'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/59.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 59,
            artist: 'Leger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/60.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 60,
            artist: 'Leger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/61.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 61,
            artist: 'Leger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/62.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 62,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/63.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 63,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/64.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 64,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/65.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 65,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/66.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 66,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/67.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 67,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/68.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 68,
            artist: 'Duchamp'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/69.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 69,
            artist: 'Duchamp'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/70.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 70,
            artist: 'Delaunay'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/71.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 71,
            artist: 'Delaunay'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/72.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 72,
            artist: 'Delaunay'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/73.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 73,
            artist: 'Braque'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/74.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 74,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/75.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 75,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/76.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 76,
            artist: 'de La Fresnaye'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/77.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 77,
            artist: 'Leger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/78.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 78,
            artist: 'Baranoff-Rossine'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/79.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 79,
            artist: 'Bruce'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/80.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 80,
            artist: 'Bruce'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/81.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 81,
            artist: 'Capek'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/82.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 82,
            artist: 'Delaunay'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/83.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 83,
            artist: 'Delaunay'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/84.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 84,
            artist: 'Gestel'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/85.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 85,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/86.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 86,
            artist: 'de La Fresnaye'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/87.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 87,
            artist: 'Le Fauconnier'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/88.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 88,
            artist: 'Marcoussis'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/89.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 89,
            artist: 'Marcoussis'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/90.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 90,
            artist: 'Marcoussis'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/91.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 91,
            artist: 'Marcoussis'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/92.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 92,
            artist: 'Popowa'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/93.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 93,
            artist: 'Popowa'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/94.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 94,
            artist: 'Popowa'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/95.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 95,
            artist: 'Popowa'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/96.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 96,
            artist: 'Popowa'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/97.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 97,
            artist: 'Popowa'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/98.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 98,
            artist: 'Popowa'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/99.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 99,
            artist: 'Ryback'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/100.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 100,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/101.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 101,
            artist: 'Bruce'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/102.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 102,
            artist: 'Bruce'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/103.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 103,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/104.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 104,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/105.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 105,
            artist: 'Metzinger'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/106.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 106,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/107.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 107,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/108.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 108,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/109.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 109,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/110.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 110,
            artist: 'Gris'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/111.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 111,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/112.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 112,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/113.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 113,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/114.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 114,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/115.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 115,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/116.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 116,
            artist: 'Tommervik'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/117.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 117,
            artist: 'Tommervik'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/118.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 118,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/119.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 119,
            artist: 'Picasso'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/120.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 120,
            artist: 'Picasso'
        },
    ],

};
