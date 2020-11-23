import pygame, random, time, sys

pygame.init()
m = 80
Imgbody = pygame.transform.scale(pygame.image.load('img/me2.png'), (m, m))
Imgbhead = pygame.transform.scale(pygame.image.load('img/tao.jpg'), (m, m))
Imgfood = pygame.transform.scale(pygame.image.load('img/banh_me.png'), (m, m))

gameSurFace = pygame.display.set_mode((1500, 800))
pygame.display.set_caption('Game Bánh Mẻ')
# mau sac
red = pygame.Color(255, 0, 0)
blue = pygame.Color(65, 105, 255)
black = pygame.Color(0, 0, 0)
white = pygame.Color(255, 255, 255)
gray = pygame.Color(128, 128, 128)
# khai baos biến
snakepos = [400, 320]
snakebody = [[400, 320], [240, 160], [80, 0]]
foodx = random.randrange(1, 15)
foody = random.randrange(1, 5)
if foodx % 2 != 0: foodx += 1
if foody % 2 != 0: foody += 1
foodpos = [foodx * 80, foody * 80]
foodflat = True
direction = "RIGHT"
changeto = direction
score = 0


def game_over():
    print("out")
    gfont = pygame.font.SysFont('consolas', 40)
    gsurf = gfont.render('Game Over!', True, red)
    grect = gsurf.get_rect()
    grect.midtop(360, 150)
    gameSurFace.blit(gsurf, grect)
    show_score(0)
    pygame.display.flip()
    time.sleep(5)
    pygame.quit()
    sys.exit()


def show_score(choice=1):
    sfont = pygame.font.SysFont('consolas', 20)
    ssurf = sfont.render('Số Mẻ:{0}'.format(score), True, black)
    srect = ssurf.get_rect()
    if choice == 1:
        srect.midtop = (70, 20)
    else:
        srect.midtop = (360, 230)
    gameSurFace.blit(ssurf, srect)


while True:
    pygame.time.delay(200)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
        if event.type == pygame.KEYDOWN:
            print(event.type)
            if event.key == pygame.K_RIGHT:
                print("Right")
                changeto = 'RIGHT'
            if event.key == pygame.K_LEFT:
                print("left")
                changeto = 'LEFT'
            if event.key == pygame.K_UP:
                print("up")
                changeto = 'UP'
            if event.key == pygame.K_DOWN:
                print("down")
                changeto = 'DOWN'
            if event.key == pygame.K_ESCAPE:
                pygame.event.post(pygame.evet.Event(pygame.QUIT))

    # huong di
    if changeto == 'RIGHT' and not direction == 'LEFT':
        direction = 'RIGHT'
    if changeto == 'LEFT' and not direction == 'RIGHT':
        direction = 'LEFT'
    if changeto == 'UP' and not direction == 'DOWN':
        direction = 'UP'
    if changeto == 'DOWN' and not direction == 'UP':
        direction = 'DOWN'

        # cap nhat vi tri moi
    if direction == 'RIGHT':
        snakepos[0] += m
    if direction == 'LEFT':
        snakepos[0] -= m
    if direction == 'UP':
        snakepos[1] -= m
    if direction == 'DOWN':
        snakepos[1] += m
    #
    snakebody.insert(0, list(snakepos))
    if snakepos[0] == foodpos[0] and snakepos[1] == foodpos[1]:
        score += 1
        foodflat = False
    else:
        snakebody.pop()

    # san sinh ra moi
    if foodflat == False:
        foodx = random.randrange(1, 15)
        foody = random.randrange(1, 5)
        if foodx % 2 != 0: foodx += 1
        if foody % 2 != 0: foody += 1
        foodpos = [foodx * 80, foody * 80]
    foodflat = True
    # cap nhat cua so len
    gameSurFace.fill(white)
    for pos in snakebody:
        gameSurFace.blit(Imgbody, pygame.Rect(pos[0], pos[1], m, m))
    gameSurFace.blit(Imgbhead, pygame.Rect(snakebody[0][0], snakebody[0][1], m, m))
    gameSurFace.blit(Imgfood, pygame.Rect(foodpos[0], foodpos[1], m, m))

    # cham canh bien
    # if snakepos[0] > 710 or snakepos[0] < 10:
    #     game_over()
    # if snakepos[1] > 710 or snakepos[1] < 10:
    #     game_over()
    # tu an chinh minh
    for b in snakebody[1:]:
        if snakepos[0] == b[0] and snakepos[1] == b[1]:
            game_over()
    # duong vien
    # pygame.draw.rect(gameSurFace, gray, (10, 10, 715, 455), 2)
    show_score()
    pygame.display.flip()
