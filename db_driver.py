import random
import pymongo
from bson.objectid import ObjectId
#from Collection import count_documents as count

Neighbourhoods = ['AEROPORTO', 'ANDORINHAS', 'ANTÔNIO HONÓRIO', 'ARIOVALDO FAVALESSA', 'BARRO VERMELHO',
                  'BELA VISTA', 'BENTO FERREIRA', 'BOA VISTA', 'BONFIM', 'CARATOÍRA', 'CENTRO', 'COMDUSA',
                  'CONQUISTA', 'CONSOLAÇÃO', 'CRUZAMENTO', 'DA PENHA', 'DE LOURDES', 'DO CABRAL', 'DO MOSCOSO',
                  'DO QUADRO', 'ENSEADA DO SUÁ', 'ESTRELINHA', 'FONTE GRANDE', 'FORTE SÃO JOÃO', 'FRADINHOS',
                  'GOIABEIRAS', 'GRANDE VITÓRIA', 'GURIGICA', 'HORTO', 'ILHA DAS CAIEIRAS', 'ILHA DE SANTA MARIA',
                  'ILHA DO BOI', 'ILHA DO FRADE', 'ILHA DO PRÍNCIPE', 'ILHAS OCEÂNICAS DE TRINDADE', 'INHANGUETÁ',
                  'ITARARÉ', 'JABOUR', 'JARDIM CAMBURI', 'JARDIM DA PENHA', 'JESUS DE NAZARETH', 'JOANA D´ARC',
                  'JUCUTUQUARA', 'MARIA ORTIZ', 'MARUÍPE', 'MATA DA PRAIA', 'MONTE BELO', 'MORADA DE CAMBURI',
                  'MÁRIO CYPRESTE', 'NAZARETH', 'NOVA PALESTINA', 'PARQUE INDUSTRIAL', 'PARQUE MOSCOSO', 'PIEDADE',
                  'PONTAL DE CAMBURI', 'PRAIA DO CANTO', 'PRAIA DO SUÁ', 'REDENÇÃO', 'REPÚBLICA', 'RESISTÊNCIA',
                  'ROMÃO', 'SANTA CECÍLIA', 'SANTA CLARA', 'SANTA HELENA', 'SANTA LUÍZA', 'SANTA LÚCIA', 'SANTA MARTHA',
                  'SANTA TEREZA', 'SANTO ANDRÉ', 'SANTO ANTÔNIO', 'SANTOS DUMONT', 'SANTOS REIS', 'SEGURANÇA DO LAR',
                  'SOLON BORGES', 'SÃO BENEDITO', 'SÃO CRISTÓVÃO', 'SÃO JOSÉ', 'SÃO PEDRO', 'TABUAZEIRO',
                  'UNIVERSITÁRIO', 'VILA RUBIM']


def get_patient_mongo(ID=None):
    if not ID:
        ID = "60081e61a2b828629c1f8d22"
    client = pymongo.MongoClient("mongodb+srv://user:1234567890@cluster0.fg8hy.mongodb.net/?retryWrites=true&w=majority")
    db = client.test
    col = db["patients"]
    doc = col.find({"_id": ObjectId(ID)})
    return doc[0]


def get_patients_ids():
    client = pymongo.MongoClient("mongodb+srv://user:1234567890@cluster0.fg8hy.mongodb.net/?retryWrites=true&w=majority")
    db = client.test
    col = db["patients"]
    return [str(x['_id']) for x in col.find()]


def get_opening(date=None):
    """
    :param date: date to look for opening [STR]
    :return: number of opening for scheduling [INT]
    """
    if not date:
        date = "2021-01-23"
    client = pymongo.MongoClient("mongodb+srv://user:1234567890@cluster0.fg8hy.mongodb.net/?retryWrites=true&w=majority")
    db = client.test
    col = db["appointments"]
    results = col.find({'requestedDate': date})
    return 7 - results.count(True)



"""
def add_random_patient(n=1):
    client = pymongo.MongoClient("mongodb+srv://user:1234567890@cluster0.fg8hy.mongodb.net/?retryWrites=true&w=majority")
    db = client.test
    col = db["patients"]
    my_list = [get_patient_demo() for i in range(n)]
    col.insert_many(my_list)
"""

def get_patient_demo(id=None):
    name = random.choice(["random name", "random name2", "random name3"])
    gender = random.choice(["Male", "Female"])
    age = random.randint(0, 100)
    location = random.choice(Neighbourhoods)
    scholarship = random.choice(["0", "1"])
    hypertension = random.choice(["0", "1"])
    diabetes = random.choice(["0", "1"])
    alcoholism = random.choice(["0", "1"])
    handicap = random.choice(["0", "1", "2", "3"])
    return {'Name': name, 'Gender': gender, 'Location': location, 'Scholarship': scholarship,
            'Hypertension': hypertension, 'Diabetes': diabetes, "Alcoholism": alcoholism,
            'Handicap': handicap, "Age": age}



def main():
    pass
    #print(get_patient_mongo())
    #add_random_patient(4)
    print(get_opening())

if __name__ == '__main__':
    main()


