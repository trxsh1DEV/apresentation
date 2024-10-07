# Lê o conteúdo do arquivo de entrada com os dados do winget
$output = Get-Content -Path "./text.csv" | Out-String


# Divide a saída em linhas
$lines = $output -split "`r`n"

# Remove as duas primeiras linhas (cabeçalho e linha de separação)
$data = $lines | Select-Object -Skip 2

# Cria um array para armazenar os objetos
$packages = @()

foreach ($line in $data) {
    if ($line -match '^(.+?)\s+(\S+)\s+(\S+)\s+(\S+)$') {
        $package = [PSCustomObject]@{
            Name = $matches[1].Trim()
            Id = $matches[2].Trim()
            Version = $matches[3].Trim()
            Source = $matches[4].Trim()
        }
        $packages += $package
    }
}

# Exporta para CSV
$packages | Export-Csv -Path "lista_de_pacotes.csv" -NoTypeInformation -Encoding UTF8

# Exporta para JSON (opcional)
$packages | ConvertTo-Json | Out-File "lista_de_pacotes.json" -Encoding UTF8

Write-Host "Processo concluído. Verifique os arquivos 'lista_de_pacotes.csv' e 'lista_de_pacotes.json' no diretório atual."