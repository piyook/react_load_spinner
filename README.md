# React Load Spinner Component

Simple Load Spinner with customizable via props

### Built With
* React 18
* Vite

## Requirements

React
React-Dom


## Usage
 
Import the component into your project and override default settings with the props below and conditionally display this depending on whether loading is occuring. Remember to use {} with props that pass a number E.g spinnerNo.

```sh
<LoadSpinner 
spinnerColor="green" 
:spinnerNo={6} />
```

## Props

Props available to override are:

*:containerWidth* :      Number: Width of loader box in pixels - default is 200  

*spinnerColor* :        String: Loader colour - default is "#4f4f4f"  

*:spinnerOpacity* :      Number: Spinner opacity - default is 0.5  

*:spinnerNo* :           Number: Number of spinners - default is 10  

*:spinnerRadius* :       Number: Radius of each spinner - default is 40  

*:intervalSeconds* :     Number: Speed of spinner in/out animation (seconds) - default is 2  

*:rotateSpeedSeconds*:   Number: Speed of spinner rotation (seconds). 
                        Zero for no rotation - default is 8





