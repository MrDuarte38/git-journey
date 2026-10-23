
import pygame
import sys

# Initialize Pygame
pygame.init()

# Window settings
WIDTH = 800
HEIGHT = 600
FPS = 60

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("My Game")

clock = pygame.time.Clock()

# Colors (RGB)
BLACK = (20, 20, 25)
WHITE = (240, 240, 240)
BLUE = (70, 140, 255)

# Player - staring point in the center of the window,width,height
player = pygame.Rect(WIDTH // 2, HEIGHT // 2, 50, 50)
player_speed = 300  # pixels per second


def handle_events():
    """Handle quitting and other events."""
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            return False

    return True


def update(dt):
    """Update game logic. dt is elapsed time in seconds."""
    keys = pygame.key.get_pressed()

    # Movement: speed is in pixels per second
    if keys[pygame.K_w] or keys[pygame.K_UP]:
        player.y -= player_speed * dt
    if keys[pygame.K_s] or keys[pygame.K_DOWN]:
        player.y += player_speed * dt
    if keys[pygame.K_a] or keys[pygame.K_LEFT]:
        player.x -= player_speed * dt
    if keys[pygame.K_d] or keys[pygame.K_RIGHT]:
        player.x += player_speed * dt

    # Keep player inside the window
    #player.clamp_ip(screen.get_rect())


def draw():
    """Draw everything."""
    screen.fill(BLACK)

    pygame.draw.rect(screen, BLUE, player)

    pygame.display.flip()


def main():
    running = True

    while running:
        # Get elapsed time since the previous frame, in seconds.
        dt = clock.tick(FPS) / 1000.0

        running = handle_events()
        update(dt)
        draw()

    pygame.quit()
    sys.exit()


main()