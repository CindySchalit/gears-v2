# **Bad Fish Gear Shifter**

https://bad-fish-gear-shifter.herokuapp.com/

## **Introduction**

Bad Fish Gear Shifter is a digital implementation of a car's gear shifter.  Users enter the amount of pressure they are applying to the accelerator pedal and the speed at which they are traveling.  Bad Fish Gear Shifter then determines how fast the components in your car's engine are rotating (in revolutions per minute or "RPM") and the corresponding gear.

## **Inspiration**

Bad Fish Gear Shifter was built for educational purposes and is a confluence of React selectors and rc-slider.  RPM and gear selectors derive the appropriate RPM and gear, respectively, from pedal pressure and speed, which the user inputs via sliders.  For more details on the calculations used in these selectors, see [gears-v2/app/containers/selectors](https://github.com/CindySchalit/gears-v2/tree/master/app/containers/selectors).  Particulars on the sliders used for pedal pressure, speed and RPMs can be found at [gears-v2/app/containers](https://github.com/CindySchalit/gears-v2/tree/master/app/containers).

## **Built With**

* React
* Redux
* rc-slider
* Webpack

## **License**
This project is licensed under the MIT License.  See [LICENSE.md](https://github.com/CindySchalit/gears-v2/blob/master/LICENSE.md) for details.
