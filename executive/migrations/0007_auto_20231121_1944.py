# Generated by Django 4.2.6 on 2023-11-21 11:44

from django.db import migrations

def insert_data(apps, schema_editor):
    TableFour = apps.get_model('executive', 'TableFour')

    data = [
        ["Abalos, Karl Christian D."        , "Quantum Computing in Healthcare"                     , "2019-10-09"   , "PUP Research Publication Office"],
        ["Aquino, Rodolfo Y.  Jr."          , "Urban Green Spaces Impact on Mental Health"          , "2019-10-09"   , "PUP Research Publication Office"],
        ["Aribon, Mark Anthony R. III"      , "AI-Powered Language Translation Advancements"        , "2019-10-09"   , "PUP Research Publication Office"],
        ["Bactasa, Melanie F."              , "Renewable Energy Storage Solutions"                  , "2019-10-09"   , "PUP Research Publication Office"],
        ["Baltazar, Mary Ann Micah R., CPA" , "Impact of Social Media on Adolescents"               , "2019-10-09"   , "PUP Research Publication Office"],
        ["Banate, Richard B., CPA"          , "Biodiversity Conservation Strategies"                , "2019-10-09"   , "PUP Research Publication Office"],
        ["Bernardino, Abraham Seth R."      , "Blockchain in Supply Chain Management"               , "2019-10-09"   , "PUP Research Publication Office"],
        ["Bernardino, Girlie F."            , "Neuroplasticity and Learning Enhancement"            , "2019-10-09"   , "PUP Research Publication Office"],
        ["Bulawit, Berna A."                , "Cybersecurity in the Internet of Things"             , "2019-10-09"   , "PUP Research Publication Office"],
        ["Calingasan, Francisco S."         , "Gene Editing Ethics and Regulations"                 , "2019-10-09"   , "PUP Research Publication Office"],
        ["Castillo, Eleazar E."             , "Climate Change Adaptation in Coastal Cities"         , "2019-10-09"   , "PUP Research Publication Office"],
        ["Caturay, Norberto V., DEM"        , "Augmented Reality in Education"                      , "2019-10-09"   , "PUP Research Publication Office"],
        ["Cecogo, Nieva M."                 , "Future of Autonomous Vehicles"                       , "2019-10-09"   , "PUP Research Publication Office"],
        ["Cipriano, Erwin"                  , "Human-Computer Interaction Evolution"                , "2019-10-09"   , "PUP Research Publication Office"],
        ["Clenuar, Ricardo H."              , "Precision Medicine and Personalized Healthcare"      , "2019-10-09"   , "PUP Research Publication Office"],
        ["Cruz, Mary Grace I."              , "Effects of Microplastics on Marine Life"             , "2019-10-09"   , "PUP Research Publication Office"],
        ["De Leon, Celeste L."              , "Quantum Cryptography for Secure Communication"       , "2019-10-09"   , "PUP Research Publication Office"],
        ["Delmo, Elijah Paul B."            , "AI in Financial Markets Prediction"                  , "2019-10-09"   , "PUP Research Publication Office"],
        ["Dolorosa, Rodrigo S., DEM"        , "Sustainable Agriculture Techniques"                  , "2019-10-09"   , "PUP Research Publication Office"],
        ["Domingo, Keinaz"                  , "Psychological Impact of Virtual Reality"             , "2019-10-09"   , "PUP Research Publication Office"],
        ["Doromal, Cherry M."               , "5G Technology and its Applications"                  , "2019-10-09"   , "PUP Research Publication Office"],
        ["Doromal, Roberto B."              , "Artificial Womb Technology"                          , "2019-10-09"   , "PUP Research Publication Office"],
        ["Dungca, Leah A."                  , "Biodegradable Plastics Development"                  , "2019-10-09"   , "PUP Research Publication Office"],
        ["Escober, Ain Gueul E."            , "Cognitive Enhancements through Brain Stimulation"    , "2019-10-09"   , "PUP Research Publication Office"],
        ["Escober, Rosicar E., Ph.D."       , "Renewable Energy Integration Challenges"             , "2019-10-09"   , "PUP Research Publication Office"],
        ["Esguerra, Firmo A."               , "Social Robots for Elderly Care"                      , "2019-10-09"   , "PUP Research Publication Office"],
        ["Esparagoza, Cherrylyn P."         , "Health Implications of Air Pollution"                , "2019-10-09"   , "PUP Research Publication Office"],
        ["Estella, Zandro T."               , "Cryptocurrencies and Global Economy"                 , "2019-10-09"   , "PUP Research Publication Office"],
        ["Fabela, Noel F."                  , "Ethical Implications of AI in Warfare"               , "2019-10-09"   , "PUP Research Publication Office"],
        ["Fernandez, Alma C."               , "Urbanization and Wildlife Conservation"              , "2019-10-09"   , "PUP Research Publication Office"],
        ["Fulleros, Richard M."             , "Biofuels as an Alternative Energy Source"            , "2019-10-09"   , "PUP Research Publication Office"],
        ["Fulleros, Jorgen Z."              , "Mind-Uploading and Consciousness"                    , "2019-10-09"   , "PUP Research Publication Office"],
        ["Gabasa, Asuncion V."              , "Space Tourism Feasibility"                           , "2019-10-09"   , "PUP Research Publication Office"],
        ["Garcia, Maita C."                 , "Smart Cities for Sustainable Living"                 , "2019-10-09"   , "PUP Research Publication Office"],
        ["Gardon, Harold Q."                , "Effects of Artificial Light on Ecosystems"           , "2019-10-09"   , "PUP Research Publication Office"],
        ["Gatan, Leslie O."                 , "Future of Quantum Teleportation"                     , "2019-10-09"   , "PUP Research Publication Office"],
        ["Gatchalian, Irynne P."            , "Technological Unemployment Concerns"                 , "2019-10-09"   , "PUP Research Publication Office"],
        ["Gulmatico, Esther S., Ph.D."      , "Nanotechnology in Medicine"                          , "2019-10-09"   , "PUP Research Publication Office"],
        ["Gutierrez, Jaime Jr. P."          , "Education Reformation through Gamification"          , "2019-10-09"   , "PUP Research Publication Office"],
        ["Isip, John Robert F."             , "Mental Health Impacts of Social Isolation"           , "2019-10-09"   , "PUP Research Publication Office"],
        ["Lara, Erwin Vicman"               , "Advancements in Quantum Biology"                     , "2019-10-09"   , "PUP Research Publication Office"],
        ["Leynes, Jerome Chrstopher G."     , "Food Security in a Changing Climate"                 , "2019-10-09"   , "PUP Research Publication Office"],
        ["Monzon, Demelyn E. Ph.D"          , "Algorithmic Bias in AI Systems"                      , "2019-10-09"   , "PUP Research Publication Office"],
        ["Monzon, Kezaiah M."               , "Trends in Human Microbiome Research"                 , "2019-10-09"   , "PUP Research Publication Office"],
        ["Morales, Sheryl R."               , "Virtual Currencies and Central Banks"                , "2019-10-09"   , "PUP Research Publication Office"],
        ["Odpaga, Ernesto J., Jr."          , "Cognitive Computing and Decision-Making"             , "2019-10-09"   , "PUP Research Publication Office"],
        ["Oliquino, Joanna Marie DC."       , "Ocean Acidification and Marine Life"                 , "2019-10-09"   , "PUP Research Publication Office"],
        ["Pineda, Jose Gil C."              , "AI-Generated Art and Creativity"                     , "2019-10-09"   , "PUP Research Publication Office"],
        ["Roxas, Rommel Y."                 , "Advances in Fusion Energy Technology"                , "2019-10-09"   , "PUP Research Publication Office"],
        ["Servigon, Cleotilde B."           , "Aerospace Innovations for Space Exploration"         , "2019-10-09"   , "PUP Research Publication Office"],
        ["Soberano, Maricar O."             , "Biometrics and Privacy Concerns"                     , "2019-10-09"   , "PUP Research Publication Office"],
        ["Soberano, Philip SJ."             , "Regenerative Medicine Breakthroughs"                 , "2019-10-09"   , "PUP Research Publication Office"],
        ["Umali, Antonius C., DPA"          , "Social Media Influence on Political Discourse"       , "2019-10-09"   , "PUP Research Publication Office"]
    ]

    for item in data:
        TableFour.objects.create(
            rsrch_author=item[0],
            rsrch_title=item[1],
            rsrch_year=item[2],
            rsrch_publisher=item[3],
        )

class Migration(migrations.Migration):

    dependencies = [
        ('executive', '0006_tablefour'),
    ]

    operations = [
        migrations.RunPython(insert_data),
    ]