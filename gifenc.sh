#!/bin/sh

palette="/tmp/palette.png"

filters="fps=15,scale=500:-1:flags=lanczos"

ffmpeg -v warning -i $1 -vf "$filters,palettegen=stats_mode=diff" -y $palette
ffmpeg -v warning -i $1 -i $palette -lavfi "$filters [x]; [x][1:v] paletteuse=dither=bayer:bayer_scale=2:diff_mode=rectangle" -y $2

