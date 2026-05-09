import requests

# Define your GitHub username and GitHub API URL
GITHUB_USERNAME = "Gungunverma1227"
API_URL = f"https://api.github.com/users/{GITHUB_USERNAME}/repos"

# Function to fetch data from GitHub API
def fetch_repos():
    response = requests.get(API_URL)
    if response.status_code == 200:
        return response.json()
    else:
        print("Error fetching data from GitHub API")
        return []

# Function to generate LaTeX code from repository data
def generate_latex_code(repos):
    latex_code = "\\section{\\textbf{Projects}}\n\\vspace{-1mm}\n"
    latex_code += "\\begin{itemize}[leftmargin=5mm, label={\\small\\textbullet}]\n"
    
    for repo in repos:
        project_name = repo.get("name", "Unknown Project")
        description = repo.get("description", "No description provided.")
        url = repo.get("html_url", "#")
        
        latex_code += f"    \\item \\textbf{{{project_name}}} \\\\ \n"
        latex_code += f"    \\textit{{{description}}} \\\\ \n"
        latex_code += f"    \\href{{{url}}}{{GitHub Link}} \\\n"
        latex_code += "    \n"
    
    latex_code += "\\end{itemize}\n"
    return latex_code

# Main function to run the script
def main():
    repos = fetch_repos()
    if repos:
        latex_code = generate_latex_code(repos)
        print(latex_code)
        # Optionally save it to a .tex file
        with open("projects.tex", "w") as f:
            f.write(latex_code)

if __name__ == "__main__":
    main()
