from django.db import models

import bcrypt

class Email(models.Model):
    preferred_name = models.CharField(max_length=127)
    email = models.EmailField()
    verified = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email

    def create_hash(self):
        return bcrypt.hashpw(self.email.encode(), bcrypt.gensalt())

    def check_hash(self, hashed_email):
        try:
            return bcrypt.checkpw(self.email.encode(), hashed_email)
        except:
            return False


