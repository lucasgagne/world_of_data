import os
import json

# Get the folder where this script is located
base_dir = os.path.dirname(os.path.abspath(__file__))

#POPULATION
# Get the folder where this script is located
base_dir = os.path.dirname(os.path.abspath(__file__))

# Folders to scan (relative to project root)
folders = [
    "plots/population",
    "plots/population_growth",
    "plots/median_age"
]

featured_list = []

for folder in folders:
    folder_path = os.path.join(base_dir, folder)
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".png"):
            # Keep relative path for frontend JS
            featured_list.append({
                "folder": folder,   # relative path
                "file": filename
            })

# Output JSON relative to script folder
with open(os.path.join(base_dir, "featured_plots_population.json"), "w") as f:
    json.dump(featured_list, f, indent=2)

print(f"Generated featured_plots.json with {len(featured_list)} entries.")


#ECONOMICS
# Folders to scan (relative to project root)
folders = [
    "plots/economics",
    "plots/inflation",
    "plots/unemployment"
]

featured_list = []

for folder in folders:
    folder_path = os.path.join(base_dir, folder)
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".png"):
            # Keep relative path for frontend JS
            featured_list.append({
                "folder": folder,   # relative path
                "file": filename
            })

# Output JSON relative to script folder
with open(os.path.join(base_dir, "featured_plots_economics.json"), "w") as f:
    json.dump(featured_list, f, indent=2)

print(f"Generated featured_plots.json with {len(featured_list)} entries.")

#LAND
# Folders to scan (relative to project root)
folders = [
    "plots/land",

]

featured_list = []

for folder in folders:
    folder_path = os.path.join(base_dir, folder)
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(".png"):
            # Keep relative path for frontend JS
            featured_list.append({
                "folder": folder,   # relative path
                "file": filename
            })

# Output JSON relative to script folder
with open(os.path.join(base_dir, "featured_plots_land.json"), "w") as f:
    json.dump(featured_list, f, indent=2)

print(f"Generated featured_plots.json with {len(featured_list)} entries.")