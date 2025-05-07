from flask import Flask, request, jsonify
import psycopg2
import config

app = Flask(__name__)

def get_db_connection():
    return psycopg2.connect(
        host=config.DB_HOST,
        database=config.DB_NAME,
        user=config.DB_USER,
        password=config.DB_PASS
    )

# Rota: Criar novo usuário
@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    phone = data.get('phone')
    user_type = data.get('user_type')

    conn = get_db_connection()
    cur = conn.cursor()
    try:
        cur.execute("""
            INSERT INTO users (name, email, password, phone, user_type)
            VALUES (%s, %s, %s, %s, %s)
        """, (name, email, password, phone, user_type))
        conn.commit()
        return jsonify({"message": "User registered successfully."}), 201
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 400
    finally:
        cur.close()
        conn.close()

# Rota: Listar serviços disponíveis
@app.route('/services', methods=['GET'])
def list_services():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        SELECT id, name, description, price, duration_minutes
        FROM services
        WHERE available = TRUE
    """)
    rows = cur.fetchall()
    services = [{
        "id": row[0],
        "name": row[1],
        "description": row[2],
        "price": float(row[3]),
        "duration": row[4]
    } for row in rows]
    cur.close()
    conn.close()
    return jsonify(services)

if __name__ == '__main__':
    app.run(debug=True)
