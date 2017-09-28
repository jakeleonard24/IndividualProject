insert into users
(email, username, password, auth_id)
values
($1, $2, $3, $4)
RETURNING *;