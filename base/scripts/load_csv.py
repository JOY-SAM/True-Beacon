from base.models import NFT
import csv


def run():
    with open('./historical_prices.csv') as file:
        reader = csv.reader(file)
        next(reader)  # Advance past the header

        NFT.objects.all().delete()

        for row in reader:
            print(row)

            obj = NFT.objects.create(
                date = row[1],
                price = row[2],
                instrument_name = row[3])
            

    obj.save()