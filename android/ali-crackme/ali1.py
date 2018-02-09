#!/usr/bin/python
import frida
import sys

package_name = "com.example.simpleencryption"

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

device = frida.get_usb_device()
pid =  device.spawn([package_name])
session = device.attach(pid)
print '[+] attach'
script = session.create_script(open("./ali1.js").read())
script.on('message', on_message)
script.load()
print '[+] load complete'
device.resume(pid)
sys.stdin.read()
