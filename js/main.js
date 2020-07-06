const barsContainer = document.querySelector("#bars-container");

// Controller Buttons
const randomizeBtn = document.querySelector("#randomize");
const sortBtn = document.querySelector("#sort");

// Sliders
const sizeSlider = document.querySelector("#size-slider");
const speedSlider = document.querySelector("#speed-slider");

// Algorithm Selectors
const selSortBtn = document.querySelector("#sel-sort");
const bubbleSortBtn = document.querySelector("#bubble-sort");
const mergeSortBtn = document.querySelector("#merge-sort");
const insertSortBtn = document.querySelector("#insert-sort");
const quickSortBtn = document.querySelector("#quick-sort");

const BLUE = "rgb(74, 74, 252)";
const PURPLE = "rgb(199, 38, 92)";
const GREEN = "green";
const RED = "rgb(243, 59, 59)";
const YELLOW = "yellow";
const ALERT_COLOR = "black";

// Controller Variables
var ARRAY_SIZE = 50;
var algo = "select";
var speed = 100;

// Initialize the array
for (var a = [], i = 0; i < ARRAY_SIZE; ++i) {
    a[i] = i;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    barsContainer.appendChild(bar);
}
var bars = document.querySelectorAll(".bar");

// Change Array Size
const ChangeArraySize = newSize => {
    // Alternate Concept which may be a little faster but is not working (Commented out part)
    // if (newSize < ARRAY_SIZE) {
    //     for (i = ARRAY_SIZE; i > ARRAY_SIZE - newSize; i--) {
    //         console.log(bars[i].parentElement);
    //         barsContainer.removeChild(bars[i]);
    //         bars[i].remove();
    //         //Render();
    //     }
    // } else if (newSize > ARRAY_SIZE) {
    //     for (i = 0; i < newSize - ARRAY_SIZE; i++) {
    //         a[ARRAY_SIZE + i] = i;
    //         const bar = document.createElement("div");
    //         bar.classList.add("bar");
    //         barsContainer.appendChild(bar);
    //         bars = document.querySelectorAll(".bar");
    //     }
    // }

    // Simpler Method which is a bit slower
    // Remove all the bars
    for (i = ARRAY_SIZE - 1; i >= 0; i--) barsContainer.removeChild(bars[i]);

    // Add the required no. of bars
    for (i = 0; i < newSize; i++) {
        a[i] = i;
        const bar = document.createElement("div");
        bar.classList.add("bar");
        barsContainer.appendChild(bar);
    }
    bars = document.querySelectorAll(".bar");
    ARRAY_SIZE = newSize;
};

// Utitlity Sleep Function
const Sleep = ms => {
    return new Promise(res => setTimeout(res, ms));
};

// Utitlity Function to Deselect all Algorithm Options
const DeselectAll = () => {
    selSortBtn.classList.add("options-us");
    bubbleSortBtn.classList.add("options-us");
    mergeSortBtn.classList.add("options-us");
    insertSortBtn.classList.add("options-us");
    quickSortBtn.classList.add("options-us");
};

// Randomize the array
const Shuffle = array => {
    for (i = 0; i < ARRAY_SIZE; i++) {
        array[i] = Math.floor(Math.random() * (84 - 1 + 1) + 1);
    }
    return array;
};

// Render the bars
const Render = color => {
    const bars = document.querySelectorAll(".bar");
    for (x = 0; x < ARRAY_SIZE; x++) {
        bars[x].style = `background: ${color};height: ${a[x]}%;`;
    }
};

// Selection Sort
async function SelectionSort() {
    for (i = 0; i < ARRAY_SIZE; i++) {
        var min_index = i;
        bars[i].style = `background: ${YELLOW}; height: ${a[i]}%;`;
        await Sleep(speed * 2);
        for (j = i + 1; j < ARRAY_SIZE; j++) {
            bars[j].style = `background: ${RED}; height: ${a[j]}%;`;
            if (a[j] < a[min_index]) {
                if (min_index != i)
                    bars[
                        min_index
                    ].style = `background: ${BLUE}; height: ${a[min_index]}%;`;

                min_index = j;

                bars[
                    min_index
                ].style = `background: ${YELLOW}; height: ${a[min_index]}%;`;

                await Sleep(speed / 2);
            } else {
                await Sleep(speed);
                bars[j].style = `background: ${BLUE}; height: ${a[j]}%;`;
            }
        }
        await Sleep(speed);

        bars[
            min_index
        ].style = `background: ${GREEN}; height: ${a[min_index]}%;`;
        bars[i].style = `background: ${GREEN}; height: ${a[i]}%;`;

        await Sleep(speed * 2);

        var temp = a[i];
        a[i] = a[min_index];
        a[min_index] = temp;

        bars[
            min_index
        ].style = `background: ${GREEN}; height: ${a[min_index]}%;`;
        bars[i].style = `background: ${GREEN}; height: ${a[i]}%;`;

        await Sleep(speed * 2);

        bars[
            min_index
        ].style = `background: ${BLUE}; height: ${a[min_index]}%;`;
        bars[i].style = `background: ${PURPLE}; height: ${a[i]}%;`;
    }
}

// Bubble Sort
const BubbleSort = async () => {
    for (i = 0; i < ARRAY_SIZE - 1; i++) {
        for (j = 0; j < ARRAY_SIZE - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                bars[j].style = `background: ${GREEN}; height: ${a[j]}%;`;
                bars[j + 1].style = `background: ${GREEN}; height: ${
                    a[j + 1]
                }%;`;

                await Sleep(speed / 2);

                const temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;

                bars[j].style = `background: ${GREEN}; height: ${a[j]}%;`;
                bars[j + 1].style = `background: ${GREEN}; height: ${
                    a[j + 1]
                }%;`;

                await Sleep(speed / 2);

                bars[j].style = `background: ${BLUE}; height: ${a[j]}%;`;
                bars[j + 1].style = `background: ${BLUE}; height: ${
                    a[j + 1]
                }%;`;
            } else {
                bars[j].style = `background: ${RED}; height: ${a[j]}%;`;
                bars[j + 1].style = `background: ${RED}; height: ${a[j + 1]}%;`;

                await Sleep(speed / 4);

                bars[j].style = `background: ${BLUE}; height: ${a[j]}%;`;
                bars[j + 1].style = `background: ${BLUE}; height: ${
                    a[j + 1]
                }%;`;
            }
        }
        bars[ARRAY_SIZE - i - 1].style = `background: ${PURPLE}; height: ${
            a[ARRAY_SIZE - i - 1]
        }%;`;
    }
    bars[0].style = `background: ${PURPLE}; height: ${a[0]}%;`;
};

// Insertion Sort
async function InsertionSort() {
    var key;
    for (i = 0; i < ARRAY_SIZE; i++) {
        key = a[i];
        j = i - 1;
        bars[i].style = `background: ${RED}; height: ${a[i]}%;`;
        await Sleep(speed * 5);
        while (j >= 0 && a[j] > key) {
            bars[j].style = `background: ${RED}; height: ${a[j]}%;`;
            Sleep(100);
            bars[j].style = `background: ${BLUE}; height: ${a[j]}%;`;
            a[j + 1] = a[j];
            j--;
        }
        bars[j + 1].style = `background: ${GREEN}; height: ${a[j + 1]}%;`;
        await Sleep(speed * 5);
        a[j + 1] = key;
        Render(BLUE);
    }
    Render(PURPLE);
}

// Quick Sort
const partition = async (low, high) => {
    const pivot = a[high];
    i = low - 1;
    bars[i + 1].style = `background: ${RED}; height: ${a[i + 1]}%;`;

    for (j = low; j < high; j++) {
        bars[j].style = `background: ${RED}; height: ${a[j]}%;`;
        await Sleep(speed);
        if (a[j] < pivot && j != i) {
            i++;
            bars[i].style = `background: ${GREEN}; height: ${a[i]}%;`;
            bars[j].style = `background: ${GREEN}; height: ${a[j]}%;`;
            await Sleep(speed * 3);
            const temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            bars[i].style = `background: ${GREEN}; height: ${a[i]}%;`;
            bars[j].style = `background: ${GREEN}; height: ${a[j]}%;`;
            await Sleep(speed * 3);
            bars[i].style = `background: ${BLUE}; height: ${a[i]}%;`;
            bars[i + 1].style = `background: ${RED}; height: ${a[i]}%;`;
            bars[j].style = `background: ${BLUE}; height: ${a[j]}%;`;
        }
        bars[j].style = `background: ${BLUE}; height: ${a[j]}%;`;
    }
    const temp = a[j];
    a[j] = a[i + 1];
    a[i + 1] = temp;

    return i + 1;
};

const QuickSort = async (low, high) => {
    if (low < high) {
        for (i = 0; i < 4; i++) {
            await Sleep(speed * 4);
            bars[low].style = `background: ${ALERT_COLOR}; height: ${a[low]}%;`;
            bars[
                high
            ].style = `background: ${ALERT_COLOR}; height: ${a[high]}%;`;
            await Sleep(speed * 4);
            bars[low].style = `background: ${BLUE}; height: ${a[low]}%;`;
            bars[high].style = `background: ${BLUE}; height: ${a[high]}%;`;
        }
        bars[high].style = `background: ${PURPLE}; height: ${a[high]}%;`;
        const pi = await partition(low, high);
        Render(BLUE);
        await QuickSort(low, pi - 1);
        await QuickSort(pi + 1, high);
    }
};

// Run the appropriate Function according to the Selected Algorithm
const Sort = async () => {
    switch (algo) {
        case "select":
            SelectionSort();
            break;
        case "bubble":
            BubbleSort();
            break;
        case "merge":
            MergeSort(0, ARRAY_SIZE - 1);
            Render();
            break;
        case "insert":
            InsertionSort();
            break;
        case "quick":
            await QuickSort(0, ARRAY_SIZE - 1);
            Render(PURPLE);
            break;
    }
};

a = Shuffle(a);
Render(BLUE);

randomizeBtn.addEventListener("click", e => {
    Shuffle(a);
    Render(BLUE);
});

sizeSlider.oninput = function() {
    ChangeArraySize(this.value);
    Shuffle(a);
    Render(BLUE);
};

speedSlider.oninput = function() {
    speed = 510 - this.value;
};

selSortBtn.addEventListener("click", () => {
    algo = "select";
    DeselectAll();
    selSortBtn.classList.remove("options-us");
    selSortBtn.classList.add("options-se");
});
bubbleSortBtn.addEventListener("click", () => {
    algo = "bubble";
    DeselectAll();
    bubbleSortBtn.classList.remove("options-us");
    bubbleSortBtn.classList.add("options-se");
});
mergeSortBtn.addEventListener("click", () => {
    algo = "merge";
    DeselectAll();
    mergeSortBtn.classList.remove("options-us");
    mergeSortBtn.classList.add("options-se");
});
insertSortBtn.addEventListener("click", () => {
    algo = "insert";
    DeselectAll();
    insertSortBtn.classList.remove("options-us");
    insertSortBtn.classList.add("options-se");
});
quickSortBtn.addEventListener("click", () => {
    algo = "quick";
    DeselectAll();
    quickSortBtn.classList.remove("options-us");
    quickSortBtn.classList.add("options-se");
});
sortBtn.addEventListener("click", () => Sort());
