from flask import Flask, request
# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')

import time

from neopixel import *
# LED strip configuration:
LED_COUNT      = 20      # Number of LED pixels.
LED_PIN        = 18      # GPIO pin connected to the pixels (must support PWM!).
LED_FREQ_HZ    = 800000  # LED signal frequency in hertz (usually 800khz)
LED_DMA        = 5       # DMA channel to use for generating signal (try 5)
LED_BRIGHTNESS = 255     # Set to 0 for darkest and 255 for brightest
LED_INVERT     = False   # True to invert the signal (when using NPN transistor level shift)

strip = Adafruit_NeoPixel(LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_INVERT, LED_BRIGHTNESS)
strip.begin()
strip.setPixelColor(2, Color(100, 0, 0))
# @app.route('/', methods=['GET'])
# def root():
#     strip.setPixelColor(10, Color(255, 0, 0))
#     return app.send_static_file('index.html')
# 
# @app.route('/', methods=['POST'])
# def update():
#     
#     return 'ok'
# 
# app.run(debug=True, host='0.0.0.0')
