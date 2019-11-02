const barsContainer = document.querySelector("#bars-container");
//const bars = document.querySelectorAll(".bar");

// Controller Buttons
const randomizeBtn = document.querySelector("#randomize");
const sortBtn = document.querySelector("#sort");

// Algorithm Selectors
const selSortBtn = document.querySelector("#sel-sort");
const bubbleSortBtn = document.querySelector("#bubble-sort");
// const mergeSortBtn = document.querySelector("#merge-sort");
const insertSortBtn = document.querySelector("#insert-sort");
const quickSortBtn = document.querySelector("#quick-sort");

// Controller Variables
const BLUE = "rgb(74, 74, 252)";
const PURPLE = "rgb(199, 38, 92)";
const GREEN = "green";
const RED = "rgb(243, 59, 59)";
const ARRAY_SIZE = 20;
var algo = "select";

// Initialize the array
for (var a = [], i = 0; i < ARRAY_SIZE; ++i) {
    a[i] = i;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    barsContainer.appendChild(bar);
}

// Utitlity Timer Function
const Sleep = ms => {
    return new Promise(res => setTimeout(res, ms));
};

// Utitlity Function to Deselect all Algorithm Options
const DeselectAll = () => {
    selSortBtn.classList.add("options-us");
    bubbleSortBtn.classList.add("options-us");
    // mergeSortBtn.classList.add("options-us");
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
const Render = color => {
    const bars = document.querySelectorAll(".bar");
    for (x = 0; x < ARRAY_SIZE; x++) {
        bars[x].style = `background: ${color};height: ${a[x]}vh;`;
    }
};

// Selection Sort
async function SelectionSort() {
    const bars = document.querySelectorAll(".bar");
    for (j = 0; j < ARRAY_SIZE; j++) {
        var min_index = j;
        for (k = j + 1; k < ARRAY_SIZE; k++)
            if (a[k] < a[min_index]) min_index = k;

        bars[j].style = `background: ${RED}; height: ${a[j]}vh;`;
        bars[
            min_index
        ].style = `background: ${RED}; height: ${a[min_index]}vh;`;

        var temp = a[j];
        a[j] = a[min_index];
        a[min_index] = temp;
        await Sleep(100);
        bars[
            min_index
        ].style = `background: ${BLUE}; height: ${a[min_index]}vh;`;
        bars[j].style = `background: ${PURPLE}; height: ${a[j]}vh;`;
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
                bars[j].style = `background: ${RED}; height: ${a[j]}vh;`;
                bars[j + 1].style = `background: ${RED}; height: ${
                    a[j + 1]
                }vh;`;
                await Sleep(25);
                bars[j].style = `background: ${BLUE}; height: ${a[j]}vh;`;
                bars[j + 1].style = `background: ${BLUE}; height: ${
                    a[j + 1]
                }vh;`;
            } else {
                bars[j].style = `background: ${GREEN}; height: ${a[j]}vh;`;
                bars[j + 1].style = `background: ${GREEN}; height: ${
                    a[j + 1]
                }vh;`;
                await Sleep(25);
                bars[j].style = `background: ${BLUE}; height: ${a[j]}vh;`;
                bars[j + 1].style = `background: ${BLUE}; height: ${
                    a[j + 1]
                }vh;`;
            }
        }
        bars[ARRAY_SIZE - i - 1].style = `background: ${PURPLE}; height: ${
            a[ARRAY_SIZE - i - 1]
        }vh;`;
    }
    bars[0].style = `background: ${PURPLE}; height: ${a[0]}vh;`;
}

// Merge Sort (Not Working, To be Fixed)
// function Merge(l, m, r) {
//     var i, j, k;
//     var n1 = m - l + 1;
//     var n2 = r - m;

//     /* create temp arrays */
//     var L = [],
//         R = [];

//     /* Copy data to temp arrays L[] and R[] */
//     for (i = 0; i < n1; i++) L[i] = a[l + i];
//     for (j = 0; j < n2; j++) R[j] = a[m + 1 + j];

//     /* Merge the temp arrays back into arr[l..r]*/
//     i = 0; // Initial index of first subarray
//     j = 0; // Initial index of second subarray
//     k = l; // Initial index of merged subarray
//     while (i < n1 && j < n2) {
//         if (L[i] <= R[j]) {
//             a[k] = L[i];
//             i++;
//         } else {
//             a[k] = R[j];
//             j++;
//         }
//         k++;
//     }

//     /* Copy the remaining elements of L[], if there
//        are any */
//     while (i < n1) {
//         a[k] = L[i];
//         i++;
//         k++;
//     }

//     /* Copy the remaining elements of R[], if there
//        are any */
//     while (j < n2) {
//         a[k] = R[j];
//         j++;
//         k++;
//     }
// }

// /* l is for left index and r is right index of the
//    sub-array of arr to be sorted */
// function MergeSort(l, r) {
//     if (l < r) {
//         // Same as (l+r)/2, but avoids overflow for
//         // large l and h
//         var m = l + (r - l) / 2;

//         // Sort first and second halves
//         MergeSort(l, m);
//         MergeSort(m + 1, r);

//         Merge(l, m, r);
//         console.log(a);
//     }
// }

// Insertion Sort
async function InsertionSort() {
    const bars = document.querySelectorAll(".bar");
    var key;
    for (i = 0; i < ARRAY_SIZE; i++) {
        key = a[i];
        j = i - 1;
        bars[i].style = `background: ${RED}; height: ${a[i]}vh;`;
        await Sleep(500);
        while (j >= 0 && a[j] > key) {
            bars[j].style = `background: ${RED}; height: ${a[j]}vh;`;
            Sleep(100);
            bars[j].style = `background: ${BLUE}; height: ${a[j]}vh;`;
            a[j + 1] = a[j];
            j--;
        }
        bars[j + 1].style = `background: ${GREEN}; height: ${a[j + 1]}vh;`;
        await Sleep(500);
        a[j + 1] = key;
        Render(BLUE);
    }
    Render(PURPLE);
}

// Quick Sort (Not Working, To be Fixed)
const partition = async (low, high) => {
    const pivot = a[high];
    i = low - 1;

    for (j = 0; j < high; j++) {
        if (a[j] < pivot) {
            i++;
            const temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
    const temp = a[j];
    a[j] = a[i + 1];
    a[i + 1] = temp;

    return i + 1;
};

function QuickSort(low, high) {
    if (low < high) {
        const pi = partition(low, high);

        QuickSort(low, pi - 1);
        QuickSort(pi + 1, high);
    }
}

// Run the appropriate Function according to the Selected Algorithm
const Sort = () => {
    switch (algo) {
        case "select":
            SelectionSort();
            break;
        case "bubble":
            BubbleSort();
            break;
        // case "merge":
        //     MergeSort(0, ARRAY_SIZE - 1);
        //     Render();
        //     break;
        case "insert":
            InsertionSort();
            break;
        case "quick":
            QuickSort(0, ARRAY_SIZE - 1);
            Render();
            break;
    }
};

a = Shuffle(a);
Render(BLUE);

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
// mergeSortBtn.addEventListener("click", () => {
//     algo = "merge";
//     DeselectAll();
//     mergeSortBtn.classList.remove("options-us");
//     mergeSortBtn.classList.add("options-se");
// });
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
