import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Sorting Algorithms</h1>
      <p className="description">
        Sorting algorithms rearrange elements based on a comparison operation. Here are some common ones:
      </p>

      <div className="grid-container">
        {/* First row - 3 Sorting Algorithms */}
        <div className="row">
          <div className="sorting-box">
            <h4>Bubble Sort</h4>
            <img src="/images/bubblesort.png" alt="Bubble Sort" />
            <button>Learn More</button>
          </div>

          <div className="sorting-box">
            <h4>Selection Sort</h4>
            <img src="/images/selectionsort.png" alt="Selection Sort" />
            <button>Learn More</button>
          </div>

          <div className="sorting-box">
            <h4>Insertion Sort</h4>
            <img src="/images/insertionsort.png" alt="Insertion Sort" />
            <button>Learn More</button>
          </div>
        </div>

        {/* Second row - 2 Sorting Algorithms centered */}
        <div className="row center">
          <div className="sorting-box">
            <h4>Merge Sort</h4>
            <img src="/images/mergesort.png" alt="Merge Sort" />
            <button>Learn More</button>
          </div>

          <div className="sorting-box">
            <h4>Quick Sort</h4>
            <img src="/images/quicksort.png" alt="Quick Sort" />
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

