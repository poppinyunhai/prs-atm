# PRS-ATM

A CLI tool for financing on [PRESS.one](https://press.one/) .

```
PRESS.one ATM usage:

* Balance:
    --key      PRESS.one private key          [STRING  / REQUIRED]
    --account  PRESS.one account              [STRING  / REQUIRED]

* Deposit:
    --action   Set as 'deposit'               [STRING  / REQUIRED]
    --key      PRESS.one private key          [STRING  / REQUIRED]
    --account  PRESS.one account              [STRING  / REQUIRED]
    --amount   Number like xx.xxxx            [STRING  / REQUIRED]
    --email    Email for notification         [STRING  / OPTIONAL]
    --memo     Comment to this transaction    [STRING  / OPTIONAL]

* Withdraw to Mixin user id:
    --action   Set as 'withdraw'              [STRING  / REQUIRED]
    --key      PRESS.one private key          [STRING  / REQUIRED]
    --account  PRESS.one account              [STRING  / REQUIRED]
    --mx-id    Mixin user id                  [STRING  / REQUIRED]
    --amount   Number like xx.xxxx            [STRING  / REQUIRED]
    --email    Email for notification         [STRING  / OPTIONAL]
    --memo     Comment to this transaction    [STRING  / OPTIONAL]

* Withdraw to Mixin number (with Mixin user name):
    --action   Set as 'withdraw'              [STRING  / REQUIRED]
    --key      PRESS.one private key          [STRING  / REQUIRED]
    --account  PRESS.one account              [STRING  / REQUIRED]
    --mx-num   Mixin user number              [STRING  / REQUIRED]
    --mx-name  Mixin user name                [STRING  / REQUIRED]
    --amount   Number like xx.xxxx            [STRING  / REQUIRED]
    --email    Email for notification         [STRING  / OPTIONAL]
    --memo     Comment to this transaction    [STRING  / OPTIONAL]

* Advanced:
    --debug    Enable or disable debug mode   [BOOLEAN / OPTIONAL]
    --api      Customize RPC API endpoint     [STRING  / OPTIONAL]

* Demo:
    $ prs-atm --action=balance \
              --key=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456 \
              --account=ABCDE
    $ prs-atm --action=deposit \
              --key=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456 \
              --account=ABCDE \
              --amount=12.3456 \
              --email=abc@def.com
    $ prs-atm --action=withdraw \
              --key=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456 \
              --account=ABCDE \
              --mx-num=12345 \
              --mx-name=ABC \
              --amount=12.3456 \
              --email=abc@def.com
```
