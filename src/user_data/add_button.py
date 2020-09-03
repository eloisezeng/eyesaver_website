import json
import os

def add_button(id, title, position, mode, vid_length):
    with open("buttons.json", "r+") as file:
        new_button = {"id": id, "title": title, "position": position, "mode": mode, "vid_length": vid_length}
        data = json.load(file)
        data.append(new_button)
        file.seek(0)
        json.dump(data, file, indent=4)
add_button("uuid", "hmmm", "11", "distracted", "8")
