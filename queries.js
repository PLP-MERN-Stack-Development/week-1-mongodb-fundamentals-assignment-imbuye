# Export collection data as JSON (optional)
mongoexport --db myLibrary --collection books --out books.json

# Initialize Git repository (if not already initialized)
git init

# Add files to git (replace filenames as needed)
git add insert_books.js books.json queries.js
# Or to add all files
git add .

# Commit your changes with a message
git commit -m "Add MongoDB scripts and exported data"

# Add remote GitHub repository URL (replace with your repo URL)
git remote add origin https://github.com/yourusername/yourrepo.git

# Push commits to GitHub (replace 'main' with 'master' if needed)
git push -u origin main
