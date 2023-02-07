# python 3.9
import pandas as pd

# 읽어올 엑셀 파일 지정
filename = '/Volumes/T7/Programming/Tabler/xlsx/teacher.xlsx'

# 엑셀 파일 읽어 오기
df = pd.read_excel(filename, engine='openpyxl')

print(df)

df.to_json('/Volumes/T7/Programming/Tabler/xlsx/teacher.json', force_ascii=False, orient='records')
