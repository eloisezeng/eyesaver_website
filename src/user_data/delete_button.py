import json

def delete_button(id):
    with open("buttons.json", "r+") as file:
        data = json.load(file)
        cnt = 0
        for button in data:
            if button["id"] == id:
                break
            cnt += 1
        del data[cnt]
        file.seek(0) # reset the file pointer to position 0 
        json.dump(data, file, indent=4) # overwrite file with dict
        file.truncate() # delete everything after the list
delete_button("uuid")