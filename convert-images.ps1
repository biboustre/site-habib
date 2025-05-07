# Chemin du dossier contenant les images
$inputDir = "C:\Users\bibou\site-habib\public\images"

# Fonction pour convertir les images
function Convert-Images {
    param (
        [string]$inputPath
    )

    # Convertir chaque image (y compris les sous-dossiers)
    Get-ChildItem -Path $inputPath -Recurse -Include *.jpg, *.jpeg, *.png | ForEach-Object {
        # Générer le chemin du fichier WebP dans le même dossier
        $outputFile = $_.FullName -replace '\.[^.]*$', '.webp'

        # Convertir l'image en WebP
        cwebp $_.FullName -o $outputFile
        Write-Host "Converti : $($_.FullName) -> $outputFile"

        # Supprimer le fichier original
        Remove-Item $_.FullName
    }
}

# Lancer la conversion
Convert-Images -inputPath $inputDir