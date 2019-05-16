import os
import subprocess
import time
import random

def wake_up():
    cmd = ['xwininfo', '-name', 'Are you alive?']
    output = subprocess.Popen(cmd, stdout=subprocess.PIPE).communicate()[0]
    readable = ''.join([chr(i) for i in output])
    cmd2 = readable.split('id: ')[1].split(' ')[0]
    os.system('xkill -id ' + cmd2)


while True:
    cmd = ['ps', '-A']
    output = subprocess.Popen(cmd, stdout=subprocess.PIPE).communicate()[0]
    readable = ''.join([chr(i) for i in output])
    readablist = readable.split('\n')
    yad_index = [i for i, x in enumerate(readablist) if 'yad' in x]
    tmp_index = [i for i, x in enumerate(readablist) if 'tmp.' in x]
    su_index = [i for i, x in enumerate(readablist) if 'su' in x]
    print(su_index, tmp_index, yad_index)
    for i in su_index:
        if i+1 in tmp_index and i+2 in yad_index:
            try:
                wake_up()
                print('I\'m awake!')
                with open('times_of_waking_up.txt', 'a') as f:
                    f.write(str(time.ctime()) + '\n\n')
            except Exception as e:
                with open('mayham.txt', 'a') as f:
                    f.write(str(e) + ' at: ' + time.ctime() + '\n')
                    f.write(str(type(e)) + '\n')
                    f.write(readablist + '\n\n')
                    print('MAYHAM!')
                pass
        elif tmp_index and yad_index:
            with open('mayham.txt', 'a') as f:
                f.write('false positive or false negative? at: ' + time.ctime() + '\n\n')
                f.write(readable + '\n\n')

    time.sleep(7 * 60 + random.random() * 60)

