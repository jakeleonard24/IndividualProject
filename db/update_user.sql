UPDATE users
SET username = $1, email = $2, image = $3, aboutMe = $4
WHERE id = $5;