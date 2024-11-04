module "main" {
  source = "../"

  region = "us-east-1"

  allowed_origins = ["*"]
}

