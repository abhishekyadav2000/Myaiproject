# Giant Heart with "ITS ME BRO" inside
message = " ITS ME BRO "
message_length = len(message)

for y in range(15, -15, -1):
    line = ""
    for x in range(-30, 30):
        if ((x * 0.05) ** 2 + (y * 0.1) ** 2 - 1) ** 3 - (x * 0.05) ** 2 * (y * 0.1) ** 3 <= 0:
            # Center row where the text should appear
            if y == 2 and -message_length // 2 <= x // 2 < message_length // 2:
                char_index = x // 2 + message_length // 2
                if 0 <= char_index < message_length:
                    line += message[char_index]
                else:
                    line += "*"
            else:
                line += "*"
        else:
            line += " "
    print(line)
