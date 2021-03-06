# Generated by Django 3.2.3 on 2021-06-05 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Portfolio_App', '0003_alter_position_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='position',
            old_name='price',
            new_name='current_price',
        ),
        migrations.AddField(
            model_name='position',
            name='current_value',
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='position',
            name='purchase_price',
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
    ]
