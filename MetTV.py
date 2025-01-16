#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import imageio.v3 as iio
import os.path

# Get latest satellite image from NOAA
webImg = "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/latest.jpg"
img = iio.imread(webImg)


# Choose desired file name for GIF
gifPath ="satLoop.gif"

# If GIF by that name does not exist, create one
if not os.path.isfile(gifPath):
    iio.imwrite(gifPath, img)
    
# If GIF by that name does exist, modify it
elif os.path.isfile(gifPath):
    
        # Get frames from existing GIF and add to a list
        framesRaw = iio.imread(gifPath, index=None)
        frames = []
        for frame in framesRaw:
            frames.append(frame)
            
        # If imagery spans less than 2 hr, append without editing
        if len(frames) < 26:
            frames.append(img)
            iio.imwrite(gifPath, frames)
            
        # If imagery spans exactly 2 hr, FIFO then append
        elif len(frames) == 26:
            frames.pop(0)
            frames.append(img)
            iio.imwrite(gifPath, frames)
            
        # If imagery spans more than 2 hr, something is wrong
        else:
            print("Length error")
            
# If the file does not either exist or not exist, something is wrong
else:
    print("File error")
