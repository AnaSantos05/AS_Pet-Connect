-- Tabela de usuários (clientes e prestadores diferenciados por tipo)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    phone VARCHAR(20),
    user_type VARCHAR(20) CHECK (user_type IN ('cliente', 'prestador', 'admin')) NOT NULL,
    is_approved BOOLEAN DEFAULT FALSE
);

-- Tabela de animais de estimação
CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES users(id),
    name VARCHAR(50),
    species VARCHAR(50),
    breed VARCHAR(50),
    age INTEGER,
    medical_info TEXT
);

-- Tabela de serviços oferecidos
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    provider_id INTEGER REFERENCES users(id),
    name VARCHAR(100),
    description TEXT,
    price NUMERIC(10, 2),
    duration_minutes INTEGER,
    available BOOLEAN DEFAULT TRUE
);

-- Tabela de agendamentos
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    pet_id INTEGER REFERENCES pets(id),
    service_id INTEGER REFERENCES services(id),
    provider_id INTEGER REFERENCES users(id),
    client_id INTEGER REFERENCES users(id),
    date DATE,
    time TIME,
    status VARCHAR(20) CHECK (status IN ('criado', 'confirmado', 'em_andamento', 'concluido', 'cancelado')) DEFAULT 'criado'
);

-- Tabela de pagamentos
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    booking_id INTEGER REFERENCES bookings(id),
    amount NUMERIC(10, 2),
    method VARCHAR(50),
    status VARCHAR(20) CHECK (status IN ('pendente', 'pago', 'cancelado')) DEFAULT 'pendente'
);

-- Tabela de avaliações (reviews)
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    booking_id INTEGER REFERENCES bookings(id),
    reviewer_id INTEGER REFERENCES users(id),
    target_user_id INTEGER REFERENCES users(id),
    rating INTEGER CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de notificações
CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read BOOLEAN DEFAULT FALSE
);
\
-- Tabela de disputas/reclamações
CREATE TABLE complaints (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    booking_id INTEGER REFERENCES bookings(id),
    description TEXT,
    status VARCHAR(20) CHECK (status IN ('pendente', 'em_revisao', 'concluido')) DEFAULT 'pendente'
);
