variable "region" {

}

variable "allowed_origins" {
  type = list(string)
}

variable "service_name" {
  default = "beyond-no"
}

