from config import cnx, app
from flask_restful import Resource, Api


# add user
class NewUser(Resource):
    def get(self):
        cursor = cnx.cursor()
        # generate userID
        addUser = "INSERT INTO storepet (user) SELECT COUNT(user) + 1 FROM storepet" # FIXME: update with actual
        cursor.execute(addUser)
        cnx.commit()
        cursor.close()


# get a random word, store it for access
class RandomWord(Resource):
    def get(self):
        cursor = cnx.cursor()
        # get random word from db
        selectWord = "SELECT * FROM pet ORDER BY RAND() limit 1" # FIXME: update with actual table
        cursor.execute(selectWord)
        for (name, owner, species, sex, birth, death) in cursor: # FIXME: update with actual values
            data = {'name': name}
        # store word in db
        storeWord = "UPDATE storepet set petname = (%s) WHERE user = (SELECT max(user))"
        word = data['name']
        cursor.execute(storeWord, word)
        cnx.commit()
        return data, 200


# retrieves word to check solution
class CheckWord(Resource):
    def get(self):
        cursor = cnx.cursor()
        getWord = "SELECT * FROM storepet ORDER BY time Desc limit 1" # FIXME: update with actual table
        cursor.execute(getWord)
        for (name, time) in cursor: # FIXME: update with actual values
            data = {'name': name}
        return data, 200


class Win(Resource):
    def get(self):
        cursor = cnx.cursor()
        addWin = "UPDATE storepet SET score = (SELECT score + 1) WHERE user = (SELECT max(user))" # FIXME: value/table
        cursor.execute(addWin)


api = Api(app)

api.add_resource(NewUser, '/user')
api.add_resource(RandomWord, '/getword')
api.add_resource(CheckWord, '/checkword')
api.add_resource(Win, '/win')

if __name__ == '__main__':
    app.run()
