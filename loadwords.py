from config import cnx

file = open('sgb-words.txt', 'r')
Lines = file.readlines()
cursor = cnx.cursor()

for line in Lines:
    add = "insert into words values (%s);" # FIXME change table name
    word = line
    cursor.execute(add, word)
    cnx.commit()

cursor.close()
cnx.close()
