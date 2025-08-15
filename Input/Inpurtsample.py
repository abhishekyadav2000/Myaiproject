import time

def print_heart_pattern():
    # Define the heart pattern
    hearts = """
    🫀❤️🫀❤️🫀❤️
    ❤️ ITS ME BRO ❤️
    🫀❤️🫀❤️🫀❤️
    """
    return hearts

def main():
    # Print multiple hearts with animation
    for _ in range(3):  # Will display the pattern 3 times
        print("\033[H\033[J")  # Clear screen (works in most terminals)
        print(print_heart_pattern())
        time.sleep(1)  # Pause for 1 second
        
if __name__ == "__main__":
    main()