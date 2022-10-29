from tkinter import *               #GUI모듈 제공하는 표준 윈도우 라이브러리

def loadImage(fname) :
    global inImage, XSIZE, YSIZE
    fp = open(fname, 'rb')

    for i in range(0,XSIZE) :
        tmpList = []
        for k in range(0,YSIZE) :
            data = int(ord(fp.read(1)))
            tmpList.append(data)
        inImage.append(tmpList)

def displayImage(image) :
    global inImage, XSIZE, YSIZE
    for i in range(0,XSIZE) :
        for k in range(0,YSIZE) :
            data = image[i][k]
            paper.put('#%02x%02x%02x'%(data,data,data),(k,i))
            #256이라..? 8 8 8 



#변수 선언
window = None                       #window 변수는 윈도창 전체를 가르킨다
canvas = None                       #canvas 변수는 캔버스를 가르킨다
XSIZE, YSIZE = 256, 256             #캔버스의 크기를 지정할 변수
inImage = []

#main
#기본 윈도우(루트 윈도우, 베이스 윈도우) 준비
window = Tk()  
window.title('흑백 사진 보기')

canvas = Canvas(window, height = XSIZE, width = YSIZE) 

#사용할 이미지 설정 + 캔버스에 부착
paper = PhotoImage(width = XSIZE, height = YSIZE)
canvas.create_image((XSIZE/2,YSIZE/2), image=paper, state='normal')

#파일 --> 메모리
filename = 'D://dev-ku/융복합 AI/0324/RAW/tree.raw'   
loadImage(filename)

#메모리 --> 화면
displayImage(inImage)

canvas.pack()                       #캔버스를 윈도우에 부착
window.mainloop()                   #윈도우창 출력