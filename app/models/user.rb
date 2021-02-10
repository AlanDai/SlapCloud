class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true 
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def generate_unique_session_token(length = 16)
        self.session_token = SecureRandom.urlsafe_base64(length)
        while User.find_by(session_token: self.session_token)
            self.session_token = SecureRandom.urlsafe_base64(length)
        end
        self.session_token
    end

    has_one_attached :audio

    has_many :slaps,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :Slap

    has_many :albums,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :Album

    has_many :comments,
        primary_key: :id,
        foreign_key: :commenter_id,
        class_name: :Comment

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like
        
end
