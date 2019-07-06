// In this file you can specify the trial data for your experiment


const trial_info = {
    // colour vision test with ishihara test plates
    colourVisionTest1: [
        {
            question: "Which number do you see here?",
            picture: "vision/ishihara.png",
            picture_number: 0,
            min_chars: 0,
            expected: 74
        },
    ],
    colourVisionTest2: [
        {
            question: "Which number do you see here?",
            picture: "vision/ishihara2.jpg",
            picture_number: 0,
            min_chars: 0,
            expected: 7
        },
    ],
    // vision test with Snellen Chart
    visionTest: [
        {
            question: "Please make sure you are one arm-length away from your computer screen. Write the letters from line 7 (below the green line) into the box below without tabs or spaces in between (just the letters).",
            picture: "vision/Snellen_chart.jpg",
            picture_number: 0,
            min_chars: 1,
            expected: 'FELOPZD'
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
            question: "Are you attending the class 'Experimental Psychology Lab' ?",
            option1: 'Yes',
            option2: 'No'
        },
    ],
    // 120 pictures with artworks, participants rate whether they like it or not
    ratingScaleLike: [
        {
            question: "How much do you like this picture?",
            picture: "images/001.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 1,
            artist: 'B',
            date: 1909,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/002.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 2,
            artist: 'B',
            date: 1909,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/003.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 3,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/004.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 4,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/005.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 5,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/006.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 6,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/007.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 7,
            artist: 'B',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/008.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 8,
            artist: 'B',
            date: 1909,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/009.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 9,
            artist: 'B',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/010.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 10,
            artist: 'P',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/011.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 11,
            artist: 'B',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/012.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 12,
            artist: 'P',
            date: 1909,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/013.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 13,
            artist: 'P',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/014.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 14,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/015.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 15,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/016.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 16,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/017.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 17,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/018.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 18,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/019.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 19,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/020.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 20,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/021.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 21,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/022.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 22,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/023.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 23,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/024.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 24,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/025.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 25,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/026.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 26,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/027.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 27,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/028.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 28,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/029.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 29,
            artist: 'P',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/030.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 30,
            artist: 'P',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/031.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 31,
            artist: 'P',
            date: 1909,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/032.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 32,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/033.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 33,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/034.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 34,
            artist: 'B',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/035.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 35,
            artist: 'B',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/036.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 36,
            artist: 'B',
            date: 1908,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/037.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 37,
            artist: 'B',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/038.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 38,
            artist: 'B',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/039.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 39,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/040.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 40,
            artist: 'B',
            date: 1912,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/041.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 41,
            artist: 'B',
            date: 1908,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/042.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 42,
            artist: 'B',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/043.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 43,
            artist: 'B',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/044.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 44,
            artist: 'B',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/045.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 45,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/046.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 46,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/047.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 47,
            artist: 'B',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/048.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 48,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/049.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 49,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/050.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 50,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/051.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 51,
            artist: 'P',
            date: 1913,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/052.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 52,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/053.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 53,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/054.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 54,
            artist: 'P',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/055.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 55,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/056.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 56,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/057.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 57,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/058.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 58,
            artist: 'P',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/059.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 59,
            artist: 'P',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/060.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 60,
            artist: 'P',
            date: 1912,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/061.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 61,
            artist: 'P',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/062.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 62,
            artist: 'P',
            date: 1912,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/063.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 63,
            artist: 'P',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/064.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 64,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/065.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 65,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/066.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 66,
            artist: 'B',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/067.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 67,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/068.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 68,
            artist: 'P',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/069.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 69,
            artist: 'P',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/070.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 70,
            artist: 'P',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/071.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 71,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/072.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 72,
            artist: 'G',
            date: 1915,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/073.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 73,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/074.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 74,
            artist: 'G',
            date: 1919,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/075.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 75,
            artist: 'G',
            date: 1915,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/076.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 76,
            artist: 'G',
            date: 1915,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/077.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 77,
            artist: 'G',
            date: 1915,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/078.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 78,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/079.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 79,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/080.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 80,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/081.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 81,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/082.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 82,
            artist: 'G',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/083.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 83,
            artist: 'G',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/084.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 84,
            artist: 'G',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/085.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 85,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/086.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 86,
            artist: 'G',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/087.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 87,
            artist: 'G',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/088.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 88,
            artist: 'G',
            date: 1916,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/089.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 89,
            artist: 'G',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/090.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 90,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/091.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 91,
            artist: 'G',
            date: 1915,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/092.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 92,
            artist: 'G',
            date: 1919,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/093.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 93,
            artist: 'G',
            date: 1919,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/094.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 94,
            artist: 'G',
            date: 1917,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/095.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 95,
            artist: 'G',
            date: 1917,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/096.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 96,
            artist: 'G',
            date: 1913,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/097.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 97,
            artist: 'G',
            date: 1917,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/098.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 98,
            artist: 'G',
            date: 1917,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/099.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 99,
            artist: 'G',
            date: 1916,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/100.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 100,
            artist: 'G',
            date: 1916,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/101.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 101,
            artist: 'G',
            date: 1915,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/102.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 102,
            artist: 'G',
            date: 1915,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/103.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 103,
            artist: 'G',
            date: 1916,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/104.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 104,
            artist: 'G',
            date: 1915,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/105.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 105,
            artist: 'G',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/106.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 106,
            artist: 'G',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/107.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 107,
            artist: 'G',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/108.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 108,
            artist: 'G',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/109.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 109,
            artist: 'G',
            date: 1913,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/110.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 110,
            artist: 'G',
            date: 1912,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/111.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 111,
            artist: 'G',
            date: 1915,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/112.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 112,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/113.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 113,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/114.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 114,
            artist: 'B',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/115.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 115,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/116.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 116,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/117.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 117,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/118.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 118,
            artist: 'P',
            date: 1913,
            color: 'monochrome'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/119.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 119,
            artist: 'B',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How much do you like this picture?",
            picture: "images/120.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 120,
            artist: 'P',
            date: 1912,
            color: 'monochrome'
        },
    ],

    // same 120 pictures again, asking participants about how well they can detect objects within the picture

    ratingScaleDetect: [
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/001.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 1,
            artist: 'B',
            date: 1909,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/002.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 2,
            artist: 'B',
            date: 1909,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/003.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 3,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/004.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 4,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/005.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 5,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/006.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 6,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/007.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 7,
            artist: 'B',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/008.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 8,
            artist: 'B',
            date: 1909,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/009.jpg",
            optionLeft: 'not at all',
            optionRight: 'very',
            picture_number: 9,
            artist: 'B',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/010.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 10,
            artist: 'P',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/011.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 11,
            artist: 'B',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/012.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 12,
            artist: 'P',
            date: 1909,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/013.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 13,
            artist: 'P',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/014.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 14,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/015.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 15,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/016.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 16,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/017.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 17,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/018.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 18,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/019.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 19,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/020.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 20,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/021.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 21,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/022.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 22,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/023.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 23,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/024.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 24,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/025.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 25,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/026.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 26,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/027.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 27,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/028.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 28,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/029.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 29,
            artist: 'P',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/030.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 30,
            artist: 'P',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/031.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 31,
            artist: 'P',
            date: 1909,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/032.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 32,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/033.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 33,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/034.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 34,
            artist: 'B',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/035.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 35,
            artist: 'B',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/036.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 36,
            artist: 'B',
            date: 1908,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/037.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 37,
            artist: 'B',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/038.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 38,
            artist: 'B',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/039.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 39,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/040.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 40,
            artist: 'B',
            date: 1912,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/041.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 41,
            artist: 'B',
            date: 1908,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/042.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 42,
            artist: 'B',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/043.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 43,
            artist: 'B',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/044.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 44,
            artist: 'B',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/045.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 45,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/046.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 46,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/047.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 47,
            artist: 'B',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/048.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 48,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/049.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 49,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/050.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 50,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/051.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 51,
            artist: 'P',
            date: 1913,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/052.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 52,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/053.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 53,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/054.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 54,
            artist: 'P',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/055.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 55,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/056.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 56,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/057.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 57,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/058.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 58,
            artist: 'P',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/059.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 59,
            artist: 'P',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/060.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 60,
            artist: 'P',
            date: 1912,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/061.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 61,
            artist: 'P',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/062.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 62,
            artist: 'P',
            date: 1912,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/063.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 63,
            artist: 'P',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/064.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 64,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/065.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 65,
            artist: 'B',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/066.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 66,
            artist: 'B',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/067.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 67,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/068.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 68,
            artist: 'P',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/069.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 69,
            artist: 'P',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/070.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 70,
            artist: 'P',
            date: 1910,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/071.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 71,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/072.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 72,
            artist: 'G',
            date: 1915,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/073.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 73,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/074.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 74,
            artist: 'G',
            date: 1919,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/075.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 75,
            artist: 'G',
            date: 1915,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/076.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 76,
            artist: 'G',
            date: 1915,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/077.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 77,
            artist: 'G',
            date: 1915,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/078.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 78,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/079.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 79,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/080.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 80,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/081.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 81,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/082.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 82,
            artist: 'G',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/083.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 83,
            artist: 'G',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/084.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 84,
            artist: 'G',
            date: 1912,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/085.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 85,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/086.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 86,
            artist: 'G',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/087.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 87,
            artist: 'G',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/088.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 88,
            artist: 'G',
            date: 1916,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/089.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 89,
            artist: 'G',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/090.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 90,
            artist: 'G',
            date: 1914,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/091.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 91,
            artist: 'G',
            date: 1915,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/092.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 92,
            artist: 'G',
            date: 1919,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/093.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 93,
            artist: 'G',
            date: 1919,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/094.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 94,
            artist: 'G',
            date: 1917,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/095.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 95,
            artist: 'G',
            date: 1917,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/096.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 96,
            artist: 'G',
            date: 1913,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/097.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 97,
            artist: 'G',
            date: 1917,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/098.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 98,
            artist: 'G',
            date: 1917,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/099.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 99,
            artist: 'G',
            date: 1916,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/100.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 100,
            artist: 'G',
            date: 1916,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/101.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 101,
            artist: 'G',
            date: 1915,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/102.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 102,
            artist: 'G',
            date: 1915,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/103.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 103,
            artist: 'G',
            date: 1916,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/104.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 104,
            artist: 'G',
            date: 1915,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/105.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 105,
            artist: 'G',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/106.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 106,
            artist: 'G',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/107.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 107,
            artist: 'G',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/108.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 108,
            artist: 'G',
            date: 1914,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/109.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 109,
            artist: 'G',
            date: 1913,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/110.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 110,
            artist: 'G',
            date: 1912,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/111.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 111,
            artist: 'G',
            date: 1915,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/112.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 112,
            artist: 'P',
            date: 1911,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/113.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 113,
            artist: 'P',
            date: 1910,
            color: 'colored'        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/114.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 114,
            artist: 'B',
            date: 1909,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/115.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 115,
            artist: 'P',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/116.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 116,
            artist: 'P',
            date: 1911,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/117.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 117,
            artist: 'B',
            date: 1910,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/118.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 118,
            artist: 'P',
            date: 1913,
            color: 'monochrome'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/119.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 119,
            artist: 'B',
            date: 1913,
            color: 'colored'
        },
        {
            question: "How well can you detect objects within this artwork?",
            picture: "images/120.jpg",
            optionLeft: "not at all",
            optionRight: "very",
            picture_number: 120,
            artist: 'P',
            date: 1912,
            color: 'monochrome'
        },
    ]

};
