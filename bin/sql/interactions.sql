CREATE TABLE monsters(
    id serial,
    name character varying(50),
    personality character varying(50)
);

CREATE TABLE habitats(
    id serial,
    name character varying(50),
    climate character varying(50),
    temperature int
);

CREATE TABLE lives(
    monster character varying(50),
    habitat character varying(50)
);

INSERT INTO monsters(name, personality) VALUES
    ('Fluffy', 'aggresive'),
    ('Noodles', 'impatient'),
    ('Rusty', 'passionate');

INSERT INTO habitats(name, climate, temperature) VALUES
                                            ('desert', 'dry', 100),
                                            ('forrest', 'haunted', 70),
                                            ('mountain', 'icy', 30);

INSERT INTO lives(monster, habitat) VALUES
                                            ('Fluffy', 'desert'),
                                            ('Noodles', 'forrest'),
                                            ('Rusty', 'mountain');


CREATE TABLE habitats(
                         id serial,
                         name character varying(50),
                         climate character varying(50),
                         temperature int
);

CREATE TABLE interactions(
    id serial,
    name character varying(50),
    created_date character varying(50),
    type character varying(50),
    location character varying(50),
    capacity character varying(50),
    clasification character varying(50),
)

{
        "id": "1",
        "name": "Pokemon",
        "created_at": "11/01/2022",
        "type": "Presencial",
        "location": "Plaza Che",
        "capacity": "50",
        "clasification": "Mixto"
    },

    name,
    created_date,
    type,
    location,
    capacity,
    clasification,