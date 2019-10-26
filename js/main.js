const barsContainer = document.querySelector("#bars-container");
//const bars = document.querySelectorAll(".bar");

// Controller Buttons
const randomizeBtn = document.querySelector("#randomize");
const sortBtn = document.querySelector("#sort");

// Algorithm Selectors
const selSortBtn = document.querySelector("#sel-sort");
const bubbleSortBtn = document.querySelector("#bubble-sort");
const mergeSortBtn = document.querySelector("#merge-sort");
const insertSortBtn = document.querySelector("#insert-sort");
const quickSortBtn = document.querySelector("#quick-sort");

// Controller Variables
const ARRAY_SIZE = 80;
var algo = "select";

// Initialize the array
for (var a = [], i = 0; i < ARRAY_SIZE; ++i) {
    a[i] = i;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    barsContainer.appendChild(bar);
}

// Utitlity Timer Function
const Timer = ms => {
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
    var tmp,
        current,
        top = ARRAY_SIZE;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    return array;
};

// Render the bars
const Render = () => {
    const bars = document.querySelectorAll(".bar");
    for (i = 0; i < ARRAY_SIZE; i++) {
        bars[i].style = "height: " + a[i] + "vh;";
    }
};

// Selection Sort
async function SelectionSort() {
    const bars = document.querySelectorAll(".bar");
    for (j = 0; j < ARRAY_SIZE; j++) {
        var min_index = j;
        for (k = j + 1; k < ARRAY_SIZE; k++)
            if (a[k] < a[min_index]) min_index = k;

        bars[j].style = "background: rgb(243, 59, 59); height: " + a[j] + "vh;";
        bars[min_index].style =
            "background: rgb(243, 59, 59); height: " + a[min_index] + "vh;";

        var temp = a[j];
        a[j] = a[min_index];
        a[min_index] = temp;
        await Timer(100);
        bars[min_index].style =
            "background: rgb(74, 74, 252); height: " + a[min_index] + "vh;";
        bars[j].style = "background: rgb(199, 38, 92); height: " + a[j] + "vh;";
    }
}

// Bubble Sort
async function BubbleSort() {
    const bars = document.querySelectorAll(".bar");

    for (i = 0; i < ARRAY_SIZE - 1; i++) {
        for (j = 0; j < ARRAY_SIZE - i - 1; j++) {
            if (a[j] < a[j + 1]) {
                const temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                bars[j].style = "background: red; height: " + a[j] + "vh;";
                bars[j + 1].style =
                    "background: red; height: " + a[j + 1] + "vh;";
                await Timer(25);
                bars[j].style =
                    "background: rgb(74, 74, 252); height: " + a[j] + "vh;";
                bars[j + 1].style =
                    "background: rgb(74, 74, 252); height: " + a[j + 1] + "vh;";
            } else {
                bars[j].style = "background: green; height: " + a[j] + "vh;";
                bars[j + 1].style =
                    "background: green; height: " + a[j + 1] + "vh;";
                await Timer(25);
                bars[j].style =
                    "background: rgb(74, 74, 252); height: " + a[j] + "vh;";
                bars[j + 1].style =
                    "background: rgb(74, 74, 252); height: " + a[j + 1] + "vh;";
            }
        }
        bars[ARRAY_SIZE - i - 1].style =
            "background: rgb(199, 38, 92); height: " +
            a[ARRAY_SIZE - i - 1] +
            "vh;";
    }
    bars[0].style = "background: rgb(199, 38, 92); height: " + a[0] + "vh;";
}

// Merge Sort
async function MergeSort() {}

// Run the appropriate Function according to the Selected Algorithm
const Sort = () => {
    switch (algo) {
        case "select":
            SelectionSort();
            break;
        case "bubble":
            BubbleSort();
            break;
        case "merge":
            MergeSort();
            break;
        case "insert":
            InsertionSort();
            break;
        case "quick":
            QuickSort();
            break;
    }
};

a = Shuffle(a);
Render();

randomizeBtn.addEventListener("click", e => {
    Shuffle(a);
    Render();
});

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
