import random

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

"""
def get_patient_mongo(id):
    # id = "60081e61a2b828629c1f8d22"
    import pymongo
    client = pymongo.MongoClient("mongodb+srv://user:1234567890@cluster0.fg8hy.mongodb.net/?retryWrites=true&w=majority")
    db = client["test"]
    col = db["patients"]
    query = {"_id": id}
    doc = col.find(query)
    return doc[0]
"""

def get_patient_demo(id):
    name = random.choice(["random name", "random name2", "random name3"])
    gender = random.choice(["Male", "Female"])
    age = random.randint(0,100)
    location = random.choice(Neighbourhoods)
    scholarship = random.choice(["0", "1"])
    hypertension = random.choice(["0", "1"])
    diabetes = random.choice(["0", "1"])
    alcoholism = random.choice(["0", "1"])
    handicap = random.choice(["0", "1", "2", "3"])
    sms_received = random.choice(["0", "1"])
    return {'Name': name, 'Gender': gender, 'Location': location, 'Scholarship': scholarship,
            'Hypertension': hypertension, 'Diabetes': diabetes, "Alcoholism": alcoholism,
            'Handicap': handicap, "SMSReceived": sms_received, "Age": age}







